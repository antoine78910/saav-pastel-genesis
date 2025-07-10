import { SearchBar } from "@/components/SearchBar";
import { BookmarkGrid, Bookmark } from "@/components/BookmarkGrid";
import { BookmarkPreview } from "@/components/BookmarkPreview";
import { AddBookmarkDialog } from "@/components/AddBookmarkDialog";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { UserAccountMenu } from "@/components/UserAccountMenu";
import { useBookmarks } from "@/hooks/useBookmarks";
import { Bookmark as BookmarkIcon, Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const { 
    bookmarks, 
    allBookmarks, 
    addBookmark, 
    deleteBookmark, 
    updateBookmarkNotes,
    updateBookmarkAiDescription,
    searchBookmarks, 
    maxBookmarks 
  } = useBookmarks();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [isDark, setIsDark] = useState(false);
  const [selectedBookmark, setSelectedBookmark] = useState<Bookmark | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const handleAddBookmark = async (bookmarkData: any) => {
    try {
      addBookmark(bookmarkData);
      toast({
        title: "Success",
        description: "Bookmark added successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to add bookmark",
        variant: "destructive",
      });
    }
  };

  const handleBookmarkClick = (bookmark: Bookmark) => {
    setSelectedBookmark(bookmark);
    setIsPreviewOpen(true);
  };

  const handleGenerateDescription = async (url: string): Promise<string> => {
    // Simulate AI description generation
    // In production, this would call your AI API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`AI-generated summary for ${url}. This is a comprehensive overview of the website's content and main features.`);
      }, 2000);
    });
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="/lovable-uploads/750dd3cd-b81d-436c-a3c8-9354275fb2f5.png" 
                alt="saave.io logo" 
                className="h-10 w-auto"
              />
              <div className="text-sm text-muted-foreground font-medium border border-green-500 px-3 py-1 rounded-lg">
                {allBookmarks.length}/{maxBookmarks}
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => navigate('/upgrade')}
                className="font-medium border-green-500 text-green-600 hover:bg-green-50"
              >
                Upgrade
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">
                <Menu className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={toggleTheme}>
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              {user && (
                <div className="border border-green-500 rounded-lg px-2 py-1">
                  <UserAccountMenu userEmail={user.email} />
                </div>
              )}
            </div>
            </div>
          </div>
        </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Your Bookmarks Collection
            </h2>
            <p className="text-muted-foreground">
              Intelligent search across {bookmarks.length} saved websites
            </p>
          </div>
          <SearchBar onSearch={searchBookmarks} />
        </div>

        {/* Bookmarks Grid */}
        <div className="mb-8">
          {bookmarks.length === 0 ? (
            <div className="text-center py-12">
              <BookmarkIcon className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No bookmarks found
              </h3>
              <p className="text-muted-foreground mb-4">
                Start building your collection by adding your first bookmark
              </p>
              <AddBookmarkDialog onAdd={handleAddBookmark} />
            </div>
          ) : (
            <BookmarkGrid 
              bookmarks={bookmarks} 
              onDelete={deleteBookmark} 
              onBookmarkClick={handleBookmarkClick}
            />
          )}
        </div>
      </main>

      {/* Bookmark Preview Dialog */}
      <BookmarkPreview
        bookmark={selectedBookmark}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        onUpdateNotes={(id, notes) => updateBookmarkNotes(id, notes)}
        onGenerateDescription={handleGenerateDescription}
      />
    </div>
    </ProtectedRoute>
  );
};

export default App;