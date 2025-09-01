import { useState } from "react";
import { 
  BarChart3, 
  BookOpen, 
  Upload, 
  Users, 
  Settings,
  TrendingUp,
  DollarSign,
  Eye,
  Search,
  Plus,
  Edit,
  Trash2,
  Download,
  Play,
  Clock,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  // Mock data
  const stats = [
    { icon: Users, label: "Total Users", value: "25,847", change: "+12.5%", color: "text-blue-500" },
    { icon: BookOpen, label: "Stories", value: "152", change: "+8.2%", color: "text-green-500" },
    { icon: Eye, label: "Total Views", value: "1.2M", change: "+23.1%", color: "text-purple-500" },
    { icon: DollarSign, label: "Revenue", value: "$14,250", change: "+18.7%", color: "text-primary" },
  ];

  const recentActivity = [
    { action: "New story published", user: "Sarah Chen", time: "2 hours ago", type: "publish" },
    { action: "User signed up", user: "Mark Johnson", time: "4 hours ago", type: "user" },
    { action: "Story updated", user: "Emma Thompson", time: "6 hours ago", type: "update" },
    { action: "Premium subscription", user: "Alex Rivera", time: "8 hours ago", type: "subscription" },
    { action: "New story published", user: "David Kim", time: "12 hours ago", type: "publish" },
  ];

  const stories = [
    {
      id: 1,
      title: "The Enchanted Forest",
      author: "Sarah Chen",
      genre: "Fantasy",
      status: "Published",
      views: "12.5K",
      rating: 4.8,
      created: "2024-01-15"
    },
    {
      id: 2,
      title: "Neon Dreams",
      author: "Marcus Rodriguez", 
      genre: "Sci-Fi",
      status: "Draft",
      views: "8.9K",
      rating: 4.7,
      created: "2024-01-10"
    },
    {
      id: 3,
      title: "Love in Bloom",
      author: "Emma Thompson",
      genre: "Romance",
      status: "Published",
      views: "15.2K",
      rating: 4.9,
      created: "2024-01-08"
    },
  ];

  const topStories = [
    { title: "Love in Bloom", revenue: "$2,450", views: "15.2K" },
    { title: "The Enchanted Forest", revenue: "$2,100", views: "12.5K" },
    { title: "Neon Dreams", revenue: "$1,800", views: "8.9K" },
    { title: "Midnight Tales", revenue: "$1,650", views: "7.3K" },
    { title: "Ocean's Mystery", revenue: "$1,400", views: "6.8K" },
  ];

  // Simulate file upload
  const handleFileUpload = (file: File) => {
    setIsUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "publish": return BookOpen;
      case "user": return Users;
      case "update": return Edit;
      case "subscription": return DollarSign;
      default: return Clock;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Published":
        return <Badge className="bg-green-100 text-green-800">Published</Badge>;
      case "Draft":
        return <Badge variant="secondary">Draft</Badge>;
      case "Review":
        return <Badge className="bg-yellow-100 text-yellow-800">Review</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background">
      <div className="dark">
        {/* Header */}
        <header className="border-b border-border bg-card">
          <div className="flex h-16 items-center px-6">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <h1 className="text-xl font-bold">VineX Admin</h1>
            </div>
            <div className="ml-auto flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="stories">Stories</TabsTrigger>
              <TabsTrigger value="upload">Upload</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card key={stat.label} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                          <p className="text-2xl font-bold">{stat.value}</p>
                          <p className={`text-sm ${stat.color} font-medium`}>{stat.change}</p>
                        </div>
                        <stat.icon className={`w-8 h-8 ${stat.color}`} />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full justify-start" variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      Add New Story
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Content
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      View Analytics
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Users className="w-4 h-4 mr-2" />
                      Manage Users
                    </Button>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => {
                        const Icon = getActivityIcon(activity.type);
                        return (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                              <Icon className="w-4 h-4 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium">{activity.action}</p>
                              <p className="text-xs text-muted-foreground">
                                {activity.user} • {activity.time}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Stories Tab */}
            <TabsContent value="stories" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Story Management</h2>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Story
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="relative flex-1 max-w-md">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input className="pl-10" placeholder="Search stories..." />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Genre</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Views</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {stories.map((story) => (
                        <TableRow key={story.id}>
                          <TableCell className="font-medium">{story.title}</TableCell>
                          <TableCell>{story.author}</TableCell>
                          <TableCell>{story.genre}</TableCell>
                          <TableCell>{getStatusBadge(story.status)}</TableCell>
                          <TableCell>{story.views}</TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span>{story.rating}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="sm">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Play className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-destructive">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Upload Tab */}
            <TabsContent value="upload" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Upload Content</h2>
                <p className="text-muted-foreground">Upload DOCX or TXT files to create new stories</p>
              </div>

              <Card>
                <CardContent className="p-8">
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-12 text-center">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Upload className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Drop files here or click to browse</h3>
                    <p className="text-muted-foreground mb-6">
                      Supports DOCX and TXT files up to 10MB
                    </p>
                    <input
                      type="file"
                      accept=".docx,.txt"
                      className="hidden"
                      id="file-upload"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload(file);
                      }}
                    />
                    <label htmlFor="file-upload">
                      <Button className="cursor-pointer">
                        Choose Files
                      </Button>
                    </label>
                  </div>

                  {isUploading && (
                    <div className="mt-6 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Uploading...</span>
                        <span>{uploadProgress}%</span>
                      </div>
                      <Progress value={uploadProgress} />
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Uploads</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">The Enchanted Forest.docx</p>
                          <p className="text-sm text-muted-foreground">Uploaded 2 hours ago</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Processed</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                          <Clock className="w-5 h-5 text-yellow-600" />
                        </div>
                        <div>
                          <p className="font-medium">Neon Dreams.txt</p>
                          <p className="text-sm text-muted-foreground">Uploaded 5 hours ago</p>
                        </div>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800">Processing</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Analytics</h2>
                <p className="text-muted-foreground">Track performance and revenue metrics</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <DollarSign className="w-5 h-5 text-primary" />
                      <span>Revenue Overview</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">This Month</span>
                        <span className="text-2xl font-bold">$14,250</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Last Month</span>
                        <span className="text-lg">$12,100</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-green-500">+17.8% from last month</span>
                      </div>
                      <div className="h-40 bg-gradient-card rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground">Revenue Chart Placeholder</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Top Performing Stories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topStories.map((story, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-xs font-medium">
                              {index + 1}
                            </div>
                            <div>
                              <p className="font-medium text-sm">{story.title}</p>
                              <p className="text-xs text-muted-foreground">{story.views} views</p>
                            </div>
                          </div>
                          <span className="font-semibold text-primary">{story.revenue}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Users Tab */}
            <TabsContent value="users" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">User Management</h2>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Export Users
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Total Users</p>
                        <p className="text-2xl font-bold">25,847</p>
                        <p className="text-sm text-green-500 font-medium">+12.5%</p>
                      </div>
                      <Users className="w-8 h-8 text-blue-500" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Premium Users</p>
                        <p className="text-2xl font-bold">3,492</p>
                        <p className="text-sm text-green-500 font-medium">+28.3%</p>
                      </div>
                      <Star className="w-8 h-8 text-yellow-500" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Active Today</p>
                        <p className="text-2xl font-bold">1,234</p>
                        <p className="text-sm text-green-500 font-medium">+5.2%</p>
                      </div>
                      <Eye className="w-8 h-8 text-purple-500" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="relative flex-1 max-w-md">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input className="pl-10" placeholder="Search users..." />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground py-8">
                    User management interface would be displayed here with user listings, search, and management capabilities.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;