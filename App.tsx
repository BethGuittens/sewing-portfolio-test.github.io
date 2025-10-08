import { Header } from "./components/Header";
import { BlogPostCard } from "./components/BlogPostCard";
import { MagazineHero } from "./components/MagazineHero";
import { MagazineDivider } from "./components/MagazineDivider";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { ColorThemeDemo } from "./components/ColorThemeDemo";
import { Button } from "./components/ui/button";
import { ChevronLeft, ChevronRight, Palette } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [showThemeDemo, setShowThemeDemo] = useState(false);

  const blogPosts = [
    {
      title: "December 2024: A Year of Growth and Innovation",
      excerpt: "As we wrap up 2024, we're reflecting on an incredible year of achievements, challenges overcome, and exciting developments. From launching new features to expanding our community, here's everything that made this year special. Our journey through 2024 has been marked by significant milestones, breakthrough innovations, and a strengthened commitment to our community.",
      date: "Dec 30, 2024",
      readTime: "8 min read",
      author: "Admin Team",
      category: "Monthly Reports",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1610251064409-8d94b0939629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hZ2F6aW5lJTIwY292ZXJ8ZW58MXx8fHwxNzU2MTI0NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Week 52: Final Sprint of the Year",
      excerpt: "This week marked our final push before the holiday break. The team has been working tirelessly to ensure all year-end deliverables are completed. We've made significant progress on our Q1 2025 roadmap and have some exciting announcements coming soon.",
      date: "Dec 28, 2024",
      readTime: "5 min read",
      author: "Sarah Johnson",
      category: "Weekly Updates",
      imageUrl: "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzU2MTE3MDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Holiday Schedule and Office Hours Update",
      excerpt: "Please note our adjusted schedule for the holiday period. Our offices will be closed from December 25th through January 2nd. Emergency support will remain available during this time.",
      date: "Dec 20, 2024",
      readTime: "2 min read",
      author: "HR Department",
      category: "Announcements"
    },
    {
      title: "November 2024: Building Stronger Connections",
      excerpt: "November was all about strengthening our community bonds and improving user experience. We hosted our first virtual meetup, launched the feedback portal, and implemented several user-requested features based on your valuable input.",
      date: "Nov 30, 2024",
      readTime: "10 min read",
      author: "Admin Team",
      category: "Monthly Reports",
      imageUrl: "https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMGJ1c2luZXNzfGVufDF8fHx8MTc1NjE1NjY0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Week 51: Preparing for Year-End Reviews",
      excerpt: "This week we've been focused on preparing comprehensive year-end reviews and planning for 2025. The data shows remarkable growth across all key metrics, and we're excited to share these insights with you in our upcoming monthly report.",
      date: "Dec 22, 2024",
      readTime: "6 min read",
      author: "Sarah Johnson",
      category: "Weekly Updates"
    },
    {
      title: "Behind the Scenes: How We Plan Our Content",
      excerpt: "Ever wondered how we decide what to share in our weekly and monthly updates? Take a peek behind the curtain as we walk you through our content planning process, from initial brainstorming to final publication.",
      date: "Dec 15, 2024",
      readTime: "7 min read",
      author: "Content Team",
      category: "Behind the Scenes",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NTYxNTY2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Magazine Header */}
        <div className="text-center py-8 border-b border-border mb-12">
          <h1 className="text-5xl md:text-7xl mb-4 tracking-tight">ANOTHER SEWING BLOG</h1>
          <p className="text-xl text-muted-foreground uppercase tracking-widest">
            Weekly & Monthly Business Updates
          </p>
          <div className="flex items-center justify-center mt-6 space-x-4">
            <div className="h-px bg-border w-16"></div>
            <span className="text-sm text-muted-foreground">Volume 2024 • Issue 52</span>
            <div className="h-px bg-border w-16"></div>
          </div>
          
          {/* Theme Demo Toggle */}
          <div className="mt-8">
            <Button
              variant="outline"
              onClick={() => setShowThemeDemo(!showThemeDemo)}
              className="gap-2"
            >
              <Palette className="w-4 h-4" />
              {showThemeDemo ? 'Hide' : 'Show'} Color Theme Guide
            </Button>
          </div>
        </div>

        {/* Color Theme Demo Section */}
        {showThemeDemo && (
          <div className="mb-12">
            <ColorThemeDemo />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Hero Feature */}
            <MagazineHero {...featuredPost} />

            {/* This Week Section */}
            <MagazineDivider 
              title="This Week" 
              subtitle="Latest updates and insights from our team"
            />
            
            {/* Magazine Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Large featured post (spans 2 columns) */}
              <div className="md:col-span-2">
                <BlogPostCard 
                  {...otherPosts[2]} 
                  layout="large"
                />
              </div>
              
              {/* Side post */}
              <div>
                <BlogPostCard 
                  {...otherPosts[0]} 
                  layout="compact"
                />
              </div>
            </div>

            {/* Horizontal layout posts */}
            <div className="space-y-6">
              <BlogPostCard 
                {...otherPosts[1]} 
                layout="horizontal"
              />
              <BlogPostCard 
                {...otherPosts[4]} 
                layout="horizontal"
              />
            </div>

            {/* This Month Section */}
            <MagazineDivider 
              title="This Month" 
              subtitle="In-depth analysis and comprehensive reports"
            />

            {/* Monthly posts grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <BlogPostCard 
                {...otherPosts[3]} 
                layout="default"
              />
              <BlogPostCard 
                {...otherPosts[5]} 
                layout="default"
              />
            </div>

            {/* Pull Quote */}
            <div className="bg-muted/30 p-8 md:p-12 rounded-2xl my-12 text-center">
              <blockquote className="text-2xl md:text-3xl italic text-muted-foreground leading-relaxed">
                "2024 has been a transformative year for our organization, marked by unprecedented growth and innovation."
              </blockquote>
              <cite className="block mt-6 text-base not-italic">— Admin Team, Year-End Review</cite>
            </div>

            {/* Pagination */}
            <div className="flex justify-center space-x-2 pt-12 border-t border-border">
              <Button variant="outline" size="sm" disabled>
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}