import { SearchBar } from "@/components/SearchBar";
import { BookmarkGrid } from "@/components/BookmarkGrid";
import { AddBookmarkDialog } from "@/components/AddBookmarkDialog";
import { useBookmarks } from "@/hooks/useBookmarks";
import { Bookmark } from "lucide-react";

const App = () => {
  const { bookmarks, addBookmark, deleteBookmark, searchBookmarks } = useBookmarks();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                <Bookmark className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">saave.io</h1>
                <p className="text-sm text-muted-foreground">Save everything. Find anything.</p>
              </div>
            </div>
            <AddBookmarkDialog onAdd={addBookmark} />
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
              <AddBookmarkDialog onAdd={addBookmark} />
            </div>
          ) : (
            <BookmarkGrid bookmarks={bookmarks} onDelete={deleteBookmark} />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;