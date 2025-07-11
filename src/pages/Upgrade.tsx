
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Zap, Bot, Tag, Search, Image } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Upgrade = () => {
  const navigate = useNavigate();
  const [isYearly, setIsYearly] = useState(true);

  const features = [
    {
      icon: Zap,
      title: "Instant capture",
      description: "Paste any URL and it's safely stored—no friction.",
    },
    {
      icon: Bot,
      title: "AI summaries",
      description: "Get the key takeaways of articles and videos without reopening them.",
    },
    {
      icon: Tag,
      title: "Auto-tagging",
      description: "Your library organizes itself—no folders, no mess.",
    },
    {
      icon: Search,
      title: "Advanced AI Search",
      description: "Type an idea; and our AI will always find the most relevant, guaranteed.",
    },
    {
      icon: Image,
      title: "Visual previews",
      description: "Thumbnails and screenshots help you spot what you need at a glance.",
    },
  ];

  const currentPlan = {
    monthly: {
      price: "$9",
      period: "month",
      yearlyPrice: "$108",
      description: "Perfect for getting started",
      savings: undefined,
    },
    yearly: {
      price: "$5",
      period: "month",
      yearlyPrice: "$60",
      originalPrice: "$108",
      savings: "$48",
      description: "Best value for power users",
      discount: "-45%",
    }
  };

  const plan = isYearly ? currentPlan.yearly : currentPlan.monthly;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={() => navigate('/app')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to App
            </Button>
            <img 
              src="/lovable-uploads/750dd3cd-b81d-436c-a3c8-9354275fb2f5.png" 
              alt="saave.io logo" 
              className="h-10 w-auto"
            />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tight text-foreground mb-6">
            Never lose an important link again.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Save it now—find it in seconds, whether it's an article, video, post, or tool.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Features Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Everything you need to organize your digital life
            </h2>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Choose your plan
              </h2>
              <p className="text-muted-foreground">
                Upgrade to Saave.pro and unlock unlimited possibilities
              </p>
            </div>

            {/* Billing Toggle */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center bg-muted rounded-lg p-1">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    !isYearly 
                      ? 'bg-background text-foreground shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
                    isYearly 
                      ? 'bg-background text-foreground shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Yearly
                  {isYearly && (
                    <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 animate-pulse">
                      -45%
                    </Badge>
                  )}
                </button>
              </div>
            </div>

            {/* Single Pricing Card */}
            <Card className="relative overflow-hidden border-primary shadow-md ring-2 ring-primary/20 transition-all duration-300">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
                {isYearly ? 'Best Value' : 'Popular'}
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold">
                      Saave.pro {isYearly ? 'Yearly' : 'Monthly'}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {plan.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">
                      /{plan.period}
                    </span>
                  </div>
                  
                  {isYearly && plan.savings && (
                    <div className="space-y-1">
                      <p className="text-sm text-green-600 font-medium">
                        Save {plan.savings} compared to monthly billing
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Unlimited bookmarks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-foreground">AI-powered summaries</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Advanced search</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Visual previews</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Auto-tagging</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Priority support</span>
                  </div>
                </div>

                <Button 
                  className="w-full font-semibold py-3 bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  {isYearly ? 'Start Yearly Plan' : 'Start Monthly Plan'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Join thousands of users who never lose important links again
          </p>
        </div>
      </div>
    </div>
  );
};

export default Upgrade;
