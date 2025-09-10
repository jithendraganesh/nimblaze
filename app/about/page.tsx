import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Target, Eye, Heart, Users, Award, Globe } from "lucide-react"
import Link from "next/link"
import { ChatWidget } from "@/components/chat-widget"

export default function AboutPage() {
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
              <Link href="/about" className="text-foreground font-medium">
                About
              </Link>
              <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
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
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Pioneering the Future of <span className="text-primary">Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              Founded on the belief that innovation should be accessible to all, Nimblaze transforms complex challenges
              into simple, elegant solutions that drive business success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-lg">
                  To empower businesses worldwide with cutting-edge technology solutions that drive innovation,
                  efficiency, and sustainable growth in the digital age.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-lg">
                  To be the global leader in transformative technology solutions, creating a world where innovation is
                  limitless and every business can thrive in the digital ecosystem.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Values</h3>
                <p className="text-muted-foreground text-lg">
                  Innovation, integrity, and impact guide everything we do. We believe in transparent partnerships,
                  continuous learning, and delivering solutions that make a real difference.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From a bold idea to a global technology leader, here's how Nimblaze has evolved to serve businesses
              worldwide.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <Badge variant="outline" className="mb-2">
                    2020
                  </Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-2">The Beginning</h3>
                  <p className="text-muted-foreground">
                    Founded by a team of passionate technologists with a vision to democratize enterprise-grade
                    technology solutions.
                  </p>
                </div>
                <div className="md:w-2/3">
                  <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                    <div className="flex items-center gap-4">
                      <Users className="h-8 w-8 text-primary" />
                      <div>
                        <div className="font-semibold text-foreground">First 10 Clients</div>
                        <div className="text-muted-foreground">Launched with innovative startups</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/3">
                  <Badge variant="outline" className="mb-2">
                    2022
                  </Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Rapid Growth</h3>
                  <p className="text-muted-foreground">
                    Expanded our team and technology stack, serving over 100 companies across multiple industries.
                  </p>
                </div>
                <div className="md:w-2/3">
                  <div className="bg-accent/5 rounded-lg p-6 border border-accent/20">
                    <div className="flex items-center gap-4">
                      <Award className="h-8 w-8 text-accent" />
                      <div>
                        <div className="font-semibold text-foreground">Industry Recognition</div>
                        <div className="text-muted-foreground">Named "Rising Tech Company of the Year"</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <Badge variant="outline" className="mb-2">
                    2024
                  </Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Global Expansion</h3>
                  <p className="text-muted-foreground">
                    Serving 500+ clients worldwide with our comprehensive suite of technology solutions and 24/7
                    support.
                  </p>
                </div>
                <div className="md:w-2/3">
                  <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                    <div className="flex items-center gap-4">
                      <Globe className="h-8 w-8 text-primary" />
                      <div>
                        <div className="font-semibold text-foreground">Global Presence</div>
                        <div className="text-muted-foreground">Operations across 15 countries</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology, business, and innovation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">AS</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Alex Smith</h3>
                <p className="text-primary font-medium mb-3">CEO & Co-Founder</p>
                <p className="text-muted-foreground text-sm">
                  Former VP of Engineering at leading tech companies. Passionate about building scalable solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">MJ</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Maria Johnson</h3>
                <p className="text-primary font-medium mb-3">CTO & Co-Founder</p>
                <p className="text-muted-foreground text-sm">
                  AI and machine learning expert with 15+ years in enterprise software development.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">DC</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">David Chen</h3>
                <p className="text-primary font-medium mb-3">Head of Product</p>
                <p className="text-muted-foreground text-sm">
                  Product strategist focused on user experience and driving innovation in enterprise solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nimblaze by the Numbers</h2>
            <p className="text-primary-foreground/80 text-lg">Our impact speaks for itself</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Global Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-foreground/80">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-primary-foreground/80">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-primary-foreground/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Join Our Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you're looking to transform your business or join our team, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                View Open Positions
              </Button>
            </div>
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
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    API
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
                  <Link href="#" className="hover:text-foreground transition-colors">
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
