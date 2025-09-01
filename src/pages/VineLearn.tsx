import { GraduationCap, BookOpen, Users, Bell, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const VineLearn = () => {
  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-8">
            <GraduationCap className="w-10 h-10" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            VineLearn
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Coming Soon - Your Learning Adventure Awaits
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Master new skills through immersive storytelling. Learn programming, design, 
            business, and more through engaging narrative-driven courses.
          </p>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Revolutionary Learning</h2>
            <p className="text-xl text-muted-foreground">
              Where education meets storytelling for unforgettable learning experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover-lift">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Story-Based Learning</h3>
                <p className="text-muted-foreground">
                  Learn complex concepts through engaging narratives and real-world scenarios 
                  that make knowledge stick.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Play className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Interactive Courses</h3>
                <p className="text-muted-foreground">
                  Hands-on projects, coding challenges, and interactive exercises that 
                  reinforce learning through practice.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Learning Community</h3>
                <p className="text-muted-foreground">
                  Connect with learners worldwide, join study groups, and get mentorship 
                  from industry experts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Categories Preview */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Course Categories</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive learning paths across multiple disciplines
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Web Development",
              "Data Science", 
              "Digital Marketing",
              "UI/UX Design",
              "Business Strategy",
              "Creative Writing",
              "Photography",
              "Personal Finance"
            ].map((category, index) => (
              <Card key={category} className="text-center hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{category}</h3>
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notify Me Section */}
      <section className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Bell className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Join the Learning Revolution</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Be among the first to experience VineLearn when we launch. 
            Early subscribers get exclusive access to beta courses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              type="email"
              className="flex-1"
            />
            <Button className="btn-hero px-8">
              Get Early Access
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            Join 10,000+ learners already on our waitlist.
          </p>
        </div>
      </section>
    </div>
  );
};

export default VineLearn;