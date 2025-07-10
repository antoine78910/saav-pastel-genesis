import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Upgrade = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => navigate('/app')}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to App
              </Button>
            </div>
            <img 
              src="/lovable-uploads/750dd3cd-b81d-436c-a3c8-9354275fb2f5.png" 
              alt="saave.io logo" 
              className="h-10 w-auto"
            />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-tight text-foreground">
                Never lose an important link again.
              </h1>
              <p className="text-xl text-muted-foreground">
                Save it now—find it in seconds, whether it's an article, video, post, or tool.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center mt-1">
                  <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Instant capture</h3>
                  <p className="text-muted-foreground">
                    Paste any URL and it's safely stored—no friction.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mt-1">
                  <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">AI summaries</h3>
                  <p className="text-muted-foreground">
                    Get the key takeaways of articles and videos without reopening them.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center mt-1">
                  <div className="w-4 h-4 bg-yellow-500 rounded-sm"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Auto-tagging</h3>
                  <p className="text-muted-foreground">
                    Your library organizes itself—no folders, no mess.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center mt-1">
                  <div className="w-4 h-4 bg-purple-500 rounded-sm"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Advanced AI Search</h3>
                  <p className="text-muted-foreground">
                    Type an idea; and our AI will always find the most relevant, guaranteed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mt-1">
                  <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Visual previews</h3>
                  <p className="text-muted-foreground">
                    Thumbnails and screenshots help you spot what you need at a glance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Pricing */}
          <div className="space-y-6">
            <div className="flex gap-4 bg-muted/50 rounded-lg p-1">
              <button className="flex-1 py-2 px-4 rounded-md bg-background text-foreground font-medium">
                Monthly
              </button>
              <button className="flex-1 py-2 px-4 rounded-md text-muted-foreground font-medium relative">
                Yearly
                <Badge className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1">
                  -49%
                </Badge>
              </button>
            </div>

            <Card className="bg-card border-border">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-lg font-semibold">SaveIt.</span>
                  <span className="text-orange-500 font-semibold">pro</span>
                </div>
                <CardDescription className="text-muted-foreground">
                  Became a SaveIt.pro member in one simple subscription.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">$9</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Billed monthly.
                  </p>
                </div>

                <p className="text-center text-sm text-muted-foreground">
                  Simple and transparent pricing. No hidden fees.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <span className="text-foreground">Unlimited bookmarks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <span className="text-foreground">Unlimited exports</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <span className="text-foreground">Priority support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <span className="text-foreground">Support of a creator</span>
                  </div>
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upgrade;