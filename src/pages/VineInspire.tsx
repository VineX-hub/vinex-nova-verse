import { Lightbulb, PenTool, Users, Bell, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const VineInspire = () => {
  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-8">
            <Lightbulb className="w-10 h-10" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            VineInspire
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Coming Soon - Your Creative Writing Companion
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Unlock your creative potential with AI-powered writing tools, story prompts, 
            character generators, and a supportive community of writers.
          </p>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What's Coming</h2>
            <p className="text-xl text-muted-foreground">
              Powerful tools to inspire and enhance your writing journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover-lift">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <PenTool className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">AI Writing Assistant</h3>
                <p className="text-muted-foreground">
                  Get intelligent suggestions, overcome writer's block, and enhance your prose 
                  with our advanced AI writing companion.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Story Generators</h3>
                <p className="text-muted-foreground">
                  Generate compelling story ideas, unique characters, and fascinating plot twists 
                  to fuel your creative imagination.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Writer Community</h3>
                <p className="text-muted-foreground">
                  Connect with fellow writers, share your work, get feedback, and participate 
                  in writing challenges and contests.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Notify Me Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Bell className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Be the First to Know</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our waitlist and get notified when VineInspire launches. 
            Early members will receive exclusive access and premium features.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              type="email"
              className="flex-1"
            />
            <Button className="btn-hero px-8">
              Notify Me
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            No spam, just updates about VineInspire's launch.
          </p>
        </div>
      </section>
    </div>
  );
};

export default VineInspire;