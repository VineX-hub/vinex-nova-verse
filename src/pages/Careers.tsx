import { Briefcase, Users, Heart, Rocket, MapPin, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Careers = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health coverage, mental health support, and wellness programs"
    },
    {
      icon: Rocket,
      title: "Growth & Development",
      description: "Learning budgets, conference attendance, and career advancement opportunities"
    },
    {
      icon: Users,
      title: "Work-Life Balance",
      description: "Flexible hours, remote work options, and unlimited PTO policy"
    }
  ];

  const openPositions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Build the next generation of immersive content experiences with React and modern web technologies.",
      requirements: ["5+ years React experience", "TypeScript expertise", "UI/UX sensibility"]
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time", 
      description: "Drive product strategy and execution for VineNovels platform features and user experience.",
      requirements: ["3+ years product management", "User-centric mindset", "Data-driven approach"]
    },
    {
      title: "Content Strategist",
      department: "Content",
      location: "New York, NY",
      type: "Full-time",
      description: "Shape our content strategy and work with creators to produce engaging stories and educational content.",
      requirements: ["Content strategy experience", "Publishing background", "Creative vision"]
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "San Francisco, CA", 
      type: "Full-time",
      description: "Scale our infrastructure and ensure reliable, high-performance content delivery worldwide.",
      requirements: ["AWS/Cloud experience", "Docker/Kubernetes", "Monitoring systems"]
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-8">
            <Briefcase className="w-10 h-10" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Shape the Future of Content
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            We're building the next generation of content platforms and we need passionate, 
            talented people to help us revolutionize how the world creates, consumes, and learns from content.
          </p>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Why VineX?</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            We're not just building products—we're creating experiences that inspire, educate, 
            and connect people around the world. Join a team that values innovation, creativity, 
            and making a meaningful impact.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="text-center hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground">
              Find your next opportunity and help us build the future
            </p>
          </div>
          
          <div className="grid gap-6">
            {openPositions.map((position, index) => (
              <Card key={position.title} className="hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold">{position.title}</h3>
                        <Badge variant="secondary">{position.department}</Badge>
                      </div>
                      
                      <div className="flex items-center gap-4 text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{position.type}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{position.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {position.requirements.map((req) => (
                          <Badge key={req} variant="outline" className="text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="md:ml-8">
                      <Button className="btn-hero">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Hiring Process</h2>
            <p className="text-xl text-muted-foreground">
              We believe in a transparent, respectful hiring process
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Application", description: "Submit your application and tell us why you're excited about VineX" },
              { step: "02", title: "Phone Screen", description: "Quick chat with our recruiting team to learn more about each other" },
              { step: "03", title: "Interview", description: "Technical and cultural fit interviews with team members" },
              { step: "04", title: "Decision", description: "We'll make a decision quickly and get back to you within a week" }
            ].map((step, index) => (
              <div key={step.step} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Role?</h2>
          <p className="text-lg text-white/80 mb-8">
            We're always looking for exceptional talent. Send us your resume and tell us 
            how you'd like to contribute to VineX's mission.
          </p>
          <Button size="lg" variant="secondary">
            Send Us Your Resume
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Careers;