import { Star, Users, BookOpen, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { EXTERNAL_LINKS, isLinkAvailable } from "@/config/links";
import heroImage from "@/assets/hero-bg.jpg";

const Landing = () => {
  const stats = [
    { icon: Users, label: "Readers", value: "25,000+" },
    { icon: BookOpen, label: "Stories", value: "150+" },
    { icon: TrendingUp, label: "Growth", value: "+45%" },
  ];

  const platforms = [
    {
      name: "VineNovels",
      status: "Live",
      description: "Immersive story reading with audio narration and premium content",
      color: "bg-primary",
      textColor: "text-primary-foreground",
      href: EXTERNAL_LINKS.novels || "#"
    },
    {
      name: "VineComics",
      status: "Coming Soon",
      description: "Visual storytelling through stunning comics and graphic novels",
      color: "bg-muted",
      textColor: "text-muted-foreground",
      href: EXTERNAL_LINKS.comics || "#"
    },
    {
      name: "VineInspire",
      status: "Coming Soon",
      description: "Creative writing tools, prompts, and inspiration for writers",
      color: "bg-muted",
      textColor: "text-muted-foreground",
      href: EXTERNAL_LINKS.inspire || "#"
    },
    {
      name: "VineLearn",
      status: "Coming Soon", 
      description: "Educational content, courses, and skill development",
      color: "bg-muted",
      textColor: "text-muted-foreground",
      href: EXTERNAL_LINKS.learn || "#"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center bg-gradient-hero overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Welcome to <span className="text-yellow-300">VineRealm</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Your gateway to premium content platforms. Discover immersive stories on VineNovels, 
              enjoy VineComics, find creative inspiration, and learn new skills across our ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {isLinkAvailable("novels") ? (
                <a 
                  href={EXTERNAL_LINKS.novels} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="btn-hero text-lg px-8 py-4">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Visit VineNovels
                  </Button>
                </a>
              ) : (
                <Button size="lg" className="btn-hero text-lg px-8 py-4" disabled>
                  <BookOpen className="w-5 h-5 mr-2" />
                  Coming Soon
                </Button>
              )}
              <Link to="/about">
                <Button size="lg" variant="outline" className="btn-glass text-lg px-8 py-4">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-slide-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Cards */}
      <section id="platforms" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Platforms</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover premium content across our integrated platform ecosystem. Each platform 
              offers unique experiences designed for different aspects of your creative journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <Card
                key={platform.name}
                className={`hover-lift cursor-pointer transition-all duration-300 ${
                  platform.status === "Live" ? "shadow-glow" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <Badge 
                      className={`${platform.color} ${platform.textColor} px-4 py-2 text-sm font-semibold`}
                    >
                      {platform.status}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{platform.name}</h3>
                  <p className="text-muted-foreground mb-6">{platform.description}</p>
                  {platform.status === "Live" && isLinkAvailable("novels") ? (
                    <a 
                      href={platform.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button className="w-full">
                        Visit Site
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  ) : (
                    <Button variant="outline" disabled className="w-full">
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <span className="text-xl font-bold">VineX</span>
              </div>
              <p className="text-background/70 mb-4">
                Your gateway to premium content platforms.
              </p>
              <div className="space-y-2 text-background/70 text-sm">
                <p>Email: vidvine0@gmail.com</p>
                <p>Location: Nigeria</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platforms</h4>
              <ul className="space-y-2 text-background/70">
                <li>
                  {isLinkAvailable("novels") ? (
                    <a 
                      href={EXTERNAL_LINKS.novels} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-primary"
                    >
                      VineNovels
                    </a>
                  ) : (
                    <span className="text-background/50">VineNovels (Coming Soon)</span>
                  )}
                </li>
                <li>
                  {isLinkAvailable("inspire") ? (
                    <a 
                      href={EXTERNAL_LINKS.inspire} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-primary"
                    >
                      VineInspire
                    </a>
                  ) : (
                    <span className="text-background/50">VineInspire (Coming Soon)</span>
                  )}
                </li>
                <li>
                  {isLinkAvailable("learn") ? (
                    <a 
                      href={EXTERNAL_LINKS.learn} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-primary"
                    >
                      VineLearn
                    </a>
                  ) : (
                    <span className="text-background/50">VineLearn (Coming Soon)</span>
                  )}
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-background/70">
                <li><Link to="/about" className="hover:text-primary">About</Link></li>
                <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-background/70">
                <li><Link to="/help" className="hover:text-primary">Help Center</Link></li>
                <li><Link to="/privacy" className="hover:text-primary">Privacy</Link></li>
                <li><Link to="/terms" className="hover:text-primary">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
            <p>&copy; {new Date().getFullYear()} VineRealm. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;