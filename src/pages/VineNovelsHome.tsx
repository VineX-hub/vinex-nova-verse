import { Search, Filter, Star, Heart, Eye, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";

const VineNovelsHome = () => {
  const stories = [
    {
      id: 1,
      title: "The Enchanted Forest",
      author: "Sarah Chen",
      rating: 4.8,
      readers: "12.5K",
      views: "125K",
      image: story1,
      genre: "Fantasy",
      description: "A magical journey through an ancient forest filled with mystical creatures and hidden secrets.",
      readTime: "45 min",
      chapters: 12
    },
    {
      id: 2,
      title: "Neon Dreams",
      author: "Marcus Rodriguez",
      rating: 4.7,
      readers: "8.9K",
      views: "89K",
      image: story2,
      genre: "Sci-Fi",
      description: "In a cyberpunk future, a hacker discovers the truth behind the corporate empire.",
      readTime: "38 min",
      chapters: 10
    },
    {
      id: 3,
      title: "Love in Bloom",
      author: "Emma Thompson",
      rating: 4.9,
      readers: "15.2K",
      views: "156K",
      image: story3,
      genre: "Romance",
      description: "A heartwarming tale of love found in the most unexpected places.",
      readTime: "32 min",
      chapters: 8
    },
    {
      id: 4,
      title: "The Last Kingdom",
      author: "James Mitchell",
      rating: 4.6,
      readers: "7.8K",
      views: "78K",
      image: story1,
      genre: "Adventure",
      description: "An epic quest to save the last remaining kingdom from ancient darkness.",
      readTime: "52 min",
      chapters: 15
    },
    {
      id: 5,
      title: "Digital Hearts",
      author: "Lisa Park",
      rating: 4.8,
      readers: "11.3K",
      views: "98K",
      image: story2,
      genre: "Sci-Fi",
      description: "When AI meets human emotion, the boundaries of love are redefined.",
      readTime: "41 min",
      chapters: 11
    },
    {
      id: 6,
      title: "Mountain Echo",
      author: "David Brown",
      rating: 4.5,
      readers: "6.7K",
      views: "67K",
      image: story3,
      genre: "Adventure",
      description: "A thrilling mountain expedition that tests the limits of human endurance.",
      readTime: "36 min",
      chapters: 9
    }
  ];

  const genres = ["All", "Fantasy", "Sci-Fi", "Romance", "Adventure", "Mystery", "Thriller"];

  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            VineNovels
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Immerse yourself in captivating stories with audio narration and interactive reading experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 w-5 h-5 text-white/60" />
              <Input 
                placeholder="Search stories..." 
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
            <Button variant="secondary" size="lg">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </section>

      {/* Genre Filter */}
      <section className="py-8 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {genres.map((genre) => (
              <Badge 
                key={genre} 
                variant={genre === "All" ? "default" : "outline"}
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {genre}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Stories</h2>
            <div className="text-muted-foreground">
              {stories.length} stories available
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <Card
                key={story.id}
                className="overflow-hidden hover-lift cursor-pointer animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {story.genre}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-black/50 text-white px-2 py-1 rounded">
                      <Clock className="w-3 h-3" />
                      <span className="text-xs">{story.readTime}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground mb-2">by {story.author}</p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {story.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium text-sm">{story.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{story.readers}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">{story.views}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <BookOpen className="w-4 h-4" />
                      <span className="text-sm">{story.chapters} chapters</span>
                    </div>
                  </div>
                  
                  <Link to="/reader">
                    <Button className="w-full btn-hero">
                      Start Reading
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VineNovelsHome;