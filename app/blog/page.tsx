import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  Zap,
  Calendar,
  Clock,
  User,
  Search,
  TrendingUp,
  Shield,
  Cloud,
  Cpu,
  Database,
  Globe,
} from "lucide-react"
import Link from "next/link"
import { ChatWidget } from "@/components/chat-widget"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">Nimblaze</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="/blog" className="text-foreground font-medium">
                Blog
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Insights & Updates
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Technology <span className="text-primary">Insights</span> & Industry Updates
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights, industry trends, and thought leadership from the Nimblaze
              team.
            </p>
            <div className="flex justify-center max-w-md mx-auto">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search articles..." className="pl-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Article</h2>
            </div>
            <Card className="border-border hover:shadow-xl transition-shadow overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <TrendingUp className="h-24 w-24 text-primary/40" />
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary">Featured</Badge>
                    <Badge variant="outline">AI & Machine Learning</Badge>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    The Future of AI in Enterprise: 5 Trends Shaping 2024
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Discover how artificial intelligence is revolutionizing enterprise operations and what businesses
                    need to know to stay competitive in the AI-driven future.
                  </p>
                  <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      Maria Johnson
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Dec 15, 2024
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />8 min read
                    </div>
                  </div>
                  <Button>
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Browse by Category</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our latest insights organized by technology focus areas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Cloud className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Cloud & Infrastructure</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Latest trends in cloud computing and infrastructure management.
                </p>
                <Badge variant="outline">12 Articles</Badge>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Cpu className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">AI & Machine Learning</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Insights into artificial intelligence and ML applications.
                </p>
                <Badge variant="outline">8 Articles</Badge>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Cybersecurity</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Security best practices and threat landscape analysis.
                </p>
                <Badge variant="outline">15 Articles</Badge>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Database className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Data & Analytics</h3>
                <p className="text-sm text-muted-foreground mb-4">Data management strategies and analytics insights.</p>
                <Badge variant="outline">10 Articles</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Latest Articles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with our most recent insights and industry analysis.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <Shield className="h-16 w-16 text-primary/40" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline">Cybersecurity</Badge>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Zero Trust Architecture: A Complete Implementation Guide
                </h3>
                <p className="text-muted-foreground mb-4">
                  Learn how to implement zero trust security principles in your organization for enhanced protection.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    Alex Smith
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Dec 12, 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />6 min
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Read More
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                <Cloud className="h-16 w-16 text-accent/40" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline">Cloud Computing</Badge>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Multi-Cloud Strategy: Benefits and Best Practices
                </h3>
                <p className="text-muted-foreground mb-4">
                  Explore the advantages of multi-cloud approaches and how to implement them effectively.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    David Chen
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Dec 10, 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />5 min
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Read More
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <Database className="h-16 w-16 text-primary/40" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline">Data Analytics</Badge>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Real-Time Analytics: Transforming Business Intelligence
                </h3>
                <p className="text-muted-foreground mb-4">
                  Discover how real-time data processing is revolutionizing business decision-making.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    Maria Johnson
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Dec 8, 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />7 min
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Read More
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                <Cpu className="h-16 w-16 text-accent/40" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline">AI & ML</Badge>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Machine Learning Operations: MLOps Best Practices
                </h3>
                <p className="text-muted-foreground mb-4">
                  Learn how to streamline your ML workflows with proven MLOps methodologies.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    Alex Smith
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Dec 5, 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />9 min
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Read More
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <Globe className="h-16 w-16 text-primary/40" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline">Digital Transformation</Badge>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Digital Transformation ROI: Measuring Success
                </h3>
                <p className="text-muted-foreground mb-4">
                  Key metrics and strategies for measuring the return on investment of digital initiatives.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    David Chen
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Dec 3, 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />6 min
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Read More
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                <Shield className="h-16 w-16 text-accent/40" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline">Case Study</Badge>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  How TechCorp Reduced Security Incidents by 90%
                </h3>
                <p className="text-muted-foreground mb-4">
                  A detailed case study on implementing comprehensive cybersecurity measures.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    Maria Johnson
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Dec 1, 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    12 min
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Read More
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="bg-transparent">
              Load More Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border bg-primary/5">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Stay Updated</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Subscribe to our newsletter and get the latest technology insights, industry trends, and expert
                  analysis delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input placeholder="Enter your email" className="flex-1" />
                  <Button>
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">Nimblaze</span>
              </div>
              <p className="text-muted-foreground">Empowering businesses with cutting-edge technology solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/services" className="hover:text-foreground transition-colors">
                    Cloud Infrastructure
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-foreground transition-colors">
                    AI & Machine Learning
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-foreground transition-colors">
                    Cybersecurity
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Nimblaze. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  )
}
