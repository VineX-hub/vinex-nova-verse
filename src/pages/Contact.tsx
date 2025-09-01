import { Mail, Phone, MapPin, Send, MessageCircle, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@vinex.com",
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      info: "Available 24/7",
      description: "Get instant support through our live chat system"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      description: "Speak directly with our support team"
    }
  ];

  const inquiryTypes = [
    { icon: Users, label: "General Support", color: "bg-blue-500" },
    { icon: Briefcase, label: "Business Partnership", color: "bg-green-500" },
    { icon: MessageCircle, label: "Media Inquiry", color: "bg-purple-500" },
    { icon: Mail, label: "Other", color: "bg-gray-500" }
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            We'd Love to Hear From You
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Have questions about VineX? Want to partner with us? Or just want to say hello? 
            Our team is here to help and we're always excited to connect with our community.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How to Reach Us</h2>
            <p className="text-xl text-muted-foreground">
              Choose the method that works best for you
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={method.title} className="text-center hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <method.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{method.title}</h3>
                  <p className="text-lg font-semibold text-primary mb-4">{method.info}</p>
                  <p className="text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Send Us a Message</h2>
            <p className="text-xl text-muted-foreground">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="What is this about?" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Type of Inquiry</label>
                  <div className="flex flex-wrap gap-2">
                    {inquiryTypes.map((type) => (
                      <Badge 
                        key={type.label}
                        variant="outline" 
                        className="px-3 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <type.icon className="w-3 h-3 mr-2" />
                        {type.label}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                  />
                </div>
                
                <Button className="w-full btn-hero" size="lg">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Visit Our Office</h2>
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">VineX Headquarters</h3>
                  <p className="text-muted-foreground">
                    123 Innovation Drive<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Our office is located in the heart of San Francisco's tech district. 
                We welcome visitors by appointment - just reach out to schedule a meeting!
              </p>
              <Button variant="outline">
                Schedule a Visit
              </Button>
            </div>
            
            <Card className="h-64 bg-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <p>Interactive Map Coming Soon</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;