import { SearchBar } from "@/components/SearchBar";
import { BookmarkGrid } from "@/components/BookmarkGrid";
import { AddBookmarkDialog } from "@/components/AddBookmarkDialog";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useBookmarks } from "@/hooks/useBookmarks";
import { Bookmark, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const App = () => {
  const { bookmarks, allBookmarks, addBookmark, deleteBookmark, searchBookmarks, maxBookmarks } = useBookmarks();
  const { toast } = useToast();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
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

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img 
                  src="/lovable-uploads/750dd3cd-b81d-436c-a3c8-9354275fb2f5.png" 
                  alt="saave.io logo" 
                  className="h-16 w-auto"
                />
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm text-muted-foreground">
                  {allBookmarks.length}/{maxBookmarks} bookmarks
                </div>
                <AddBookmarkDialog onAdd={handleAddBookmark} />
                <Button variant="ghost" size="sm" onClick={handleSignOut}>
                  <LogOut className="h-4 w-4" />
                </Button>
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
              <Bookmark className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No bookmarks found
              </h3>
              <p className="text-muted-foreground mb-4">
                Start building your collection by adding your first bookmark
              </p>
              <AddBookmarkDialog onAdd={handleAddBookmark} />
            </div>
          ) : (
            <BookmarkGrid bookmarks={bookmarks} onDelete={deleteBookmark} />
          )}
        </div>
      </main>
    </div>
    </ProtectedRoute>
  );
};

export default App;