import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import TechSvgBackground from "@/components/TechSvgBackground";

const Blog = () => {
  const featuredPost = {
    title: "The Future of AI in Enterprise Software Development",
    excerpt: "Exploring how artificial intelligence is revolutionizing the way we build and deploy enterprise applications in 2025.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "AI & Machine Learning",
    image: "🤖",
  };

  const blogPosts = [
    {
      title: "Building Scalable Microservices Architecture",
      excerpt: "Learn the best practices for designing and implementing microservices that can handle millions of requests.",
      author: "Michael Chen",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Architecture",
      trending: true,
    },
    {
      title: "Modern DevOps Practices for 2024",
      excerpt: "A comprehensive guide to implementing CI/CD pipelines and automating your deployment workflow.",
      author: "Emily Rodriguez",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "DevOps",
      trending: true,
    },
    {
      title: "Mobile App Performance Optimization",
      excerpt: "Tips and tricks to make your mobile applications faster and more responsive.",
      author: "David Kim",
      date: "March 5, 2024",
      readTime: "5 min read",
      category: "Mobile Development",
      trending: false,
    },
    {
      title: "Cloud Security Best Practices",
      excerpt: "Essential security measures every organization should implement in their cloud infrastructure.",
      author: "Lisa Anderson",
      date: "March 2, 2024",
      readTime: "10 min read",
      category: "Security",
      trending: true,
    },
    {
      title: "React 19: What's New and Exciting",
      excerpt: "Discover the latest features and improvements in React 19 that will change how you build web apps.",
      author: "James Wilson",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Web Development",
      trending: false,
    },
    {
      title: "Database Optimization Techniques",
      excerpt: "Advanced strategies to optimize your database queries and improve application performance.",
      author: "Maria Garcia",
      date: "February 25, 2024",
      readTime: "9 min read",
      category: "Database",
      trending: false,
    },
  ];

  const categories = [
    "All Posts",
    "Web Development",
    "Mobile Development",
    "AI & Machine Learning",
    "DevOps",
    "Security",
    "Database",
    "Architecture",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <TechSvgBackground />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Insights, tutorials, and news from the world of technology
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto mb-16"
          >
            <Card className="glass-card-hover overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center p-12">
                  <div className="text-8xl">{featuredPost.image}</div>
                </div>
                <CardHeader className="p-8">
                  <Badge className="w-fit mb-4">{featuredPost.category}</Badge>
                  <CardTitle className="text-3xl mb-4">{featuredPost.title}</CardTitle>
                  <CardDescription className="text-base mb-6">{featuredPost.excerpt}</CardDescription>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Button className="w-fit group">
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardHeader>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 border-y border-border/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Button
                  variant={index === 0 ? "default" : "outline"}
                  className="rounded-full"
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-card-hover h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary">{post.category}</Badge>
                      {post.trending && (
                        <Badge variant="outline" className="gap-1">
                          <TrendingUp className="w-3 h-3" />
                          Trending
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl mb-3">{post.title}</CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button variant="ghost" className="w-full group">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline">
              Load More Articles
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-4">
              Subscribe to Our <span className="gradient-text">Newsletter</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get the latest tech insights and updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
              <Button size="lg" className="sm:w-auto">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;