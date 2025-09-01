import { Target, Users, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We're reimagining how content is created, consumed, and shared in the digital age."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a global community of creators, learners, and storytellers who inspire each other."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering premium experiences that exceed expectations in every interaction."
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About VineX
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Pioneering the Future of Content
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            VineX is more than a platform—it's a revolution in how we experience, create, 
            and learn from digital content. We're building the next generation of immersive content experiences.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            To democratize access to premium content experiences and empower creators 
            with cutting-edge tools that bring stories, learning, and inspiration to life 
            in ways never before possible.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {values.map((value, index) => (
              <Card key={value.title} className="text-center hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The VineX Ecosystem</h2>
            <p className="text-xl text-muted-foreground">
              Three interconnected platforms, infinite possibilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">VineNovels</h3>
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">Live</span>
                </div>
                <p className="text-muted-foreground mb-6">
                  Immersive storytelling with audio narration, interactive reading experiences, 
                  and a vibrant community of readers and authors.
                </p>
                <Link to="/novels">
                  <Button className="btn-hero w-full">
                    Explore Stories
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">VineInspire</h3>
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">Coming Soon</span>
                </div>
                <p className="text-muted-foreground mb-6">
                  AI-powered creative writing tools, story generators, and a supportive 
                  community to help writers unlock their full potential.
                </p>
                <Link to="/inspire">
                  <Button variant="outline" className="w-full">
                    Join Waitlist
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">VineLearn</h3>
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">Coming Soon</span>
                </div>
                <p className="text-muted-foreground mb-6">
                  Revolutionary learning through narrative-driven courses, interactive content, 
                  and real-world skill development across multiple disciplines.
                </p>
                <Link to="/learn">
                  <Button variant="outline" className="w-full">
                    Get Early Access
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">Growing Together</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "25,000+", label: "Active Readers" },
              { value: "150+", label: "Stories Published" },
              { value: "1M+", label: "Reading Sessions" },
              { value: "45%", label: "Monthly Growth" }
            ].map((stat, index) => (
              <div key={stat.label} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-lg text-white/80 mb-8">
            Join thousands of readers, creators, and learners in the VineX community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/novels">
              <Button size="lg" variant="secondary">
                Start Reading
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="btn-glass">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;