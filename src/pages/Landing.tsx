import { Star, Users, BookOpen, TrendingUp, ArrowRight, Play, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";

const Landing = () => {
  const stats = [
    { icon: Users, label: "Readers", value: "25,000+" },
    { icon: BookOpen, label: "Stories", value: "150+" },
    { icon: Eye, label: "Sessions", value: "1M+" },
    { icon: TrendingUp, label: "Growth", value: "+45%" },
  ];

  const platforms = [
    {
      name: "VineNovels",
      status: "Live",
      description: "Immersive story reading with audio narration",
      color: "bg-primary",
      textColor: "text-primary-foreground",
      href: "/reader"
    },
    {
      name: "VineInspire",
      status: "Coming Soon",
      description: "Creative writing tools and inspiration",
      color: "bg-muted",
      textColor: "text-muted-foreground",
      href: "#"
    },
    {
      name: "VineLearn",
      status: "Coming Soon", 
      description: "Educational content and courses",
      color: "bg-muted",
      textColor: "text-muted-foreground",
      href: "#"
    },
  ];

  const featuredStories = [
    {
      id: 1,
      title: "The Enchanted Forest",
      author: "Sarah Chen",
      rating: 4.8,
      readers: "12.5K",
      image: story1,
      genre: "Fantasy"
    },
    {
      id: 2,
      title: "Neon Dreams",
      author: "Marcus Rodriguez",
      rating: 4.7,
      readers: "8.9K",
      image: story2,
      genre: "Sci-Fi"
    },
    {
      id: 3,
      title: "Love in Bloom",
      author: "Emma Thompson",
      rating: 4.9,
      readers: "15.2K",
      image: story3,
      genre: "Romance"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
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
              Welcome to <span className="text-yellow-300">VineX</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              The future of content creation and consumption. Discover immersive stories, 
              gain inspiration, and learn new skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reader">
                <Button size="lg" className="btn-hero text-lg px-8 py-4">
                  <Play className="w-5 h-5 mr-2" />
                  Explore VineNovels
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="btn-glass text-lg px-8 py-4">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
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
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Platforms</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover a world of content across our integrated platform ecosystem
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card
                key={platform.name}
                className={`hover-lift cursor-pointer transition-all duration-300 ${
                  platform.status === "Live" ? "shadow-glow" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => platform.href !== "#" && (window.location.href = platform.href)}
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
                  {platform.status === "Live" ? (
                    <Link to={platform.href}>
                      <Button className="w-full">
                        Explore Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
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

      {/* Featured Stories */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Stories</h2>
            <p className="text-xl text-muted-foreground">
              Discover the most popular stories on VineNovels
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredStories.map((story, index) => (
              <Card
                key={story.id}
                className="overflow-hidden hover-lift cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {story.genre}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                  <p className="text-muted-foreground mb-4">by {story.author}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{story.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Heart className="w-4 h-4" />
                      <span>{story.readers}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/reader">
              <Button size="lg" className="btn-hero">
                View All Stories
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
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
              <p className="text-background/70">
                The future of content creation and consumption.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platforms</h4>
              <ul className="space-y-2 text-background/70">
                <li><Link to="/reader" className="hover:text-primary">VineNovels</Link></li>
                <li><span className="cursor-not-allowed">VineInspire</span></li>
                <li><span className="cursor-not-allowed">VineLearn</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-primary">About</a></li>
                <li><a href="#" className="hover:text-primary">Careers</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-primary">Help Center</a></li>
                <li><a href="#" className="hover:text-primary">Privacy</a></li>
                <li><a href="#" className="hover:text-primary">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
            <p>&copy; 2024 VineX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;