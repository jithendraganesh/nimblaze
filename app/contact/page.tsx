import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Mail, Phone, MapPin, Clock, Send, Globe, Linkedin, Twitter, Github } from "lucide-react"
import Link from "next/link"
import { ChatWidget } from "@/components/chat-widget"

export default function ContactPage() {
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
              <Link href="/contact" className="text-foreground font-medium">
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
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Let's Build Something <span className="text-primary">Amazing</span> Together
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              Ready to transform your business? Our team of experts is here to help you navigate your digital
              transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest</Label>
                  <select
                    id="service"
                    className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a service</option>
                    <option value="cloud">Cloud Infrastructure</option>
                    <option value="ai">AI & Machine Learning</option>
                    <option value="data">Data Management</option>
                    <option value="security">Cybersecurity</option>
                    <option value="development">Custom Development</option>
                    <option value="bi">Business Intelligence</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your project and how we can help..." rows={4} />
                </div>
                <Button size="lg" className="w-full">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Email Us</h3>
                      <p className="text-muted-foreground mb-2">Get in touch via email for detailed inquiries</p>
                      <div className="space-y-1">
                        <p className="text-foreground font-medium">hello@nimblaze.com</p>
                        <p className="text-foreground font-medium">support@nimblaze.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
                      <p className="text-muted-foreground mb-2">Speak directly with our team</p>
                      <div className="space-y-1">
                        <p className="text-foreground font-medium">+1 (555) 123-4567</p>
                        <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM EST</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Visit Us</h3>
                      <p className="text-muted-foreground mb-2">Our headquarters location</p>
                      <div className="space-y-1">
                        <p className="text-foreground font-medium">123 Innovation Drive</p>
                        <p className="text-foreground font-medium">San Francisco, CA 94105</p>
                        <p className="text-foreground font-medium">United States</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Business Hours</h3>
                      <p className="text-muted-foreground mb-2">When you can reach us</p>
                      <div className="space-y-1">
                        <p className="text-foreground font-medium">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-foreground font-medium">Saturday: 10:00 AM - 4:00 PM</p>
                        <p className="text-foreground font-medium">Sunday: Closed</p>
                        <p className="text-sm text-muted-foreground mt-2">Emergency support available 24/7</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Global Presence</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              With offices around the world, we're always close to our clients and ready to provide local support.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-border text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">San Francisco</h3>
                <p className="text-muted-foreground mb-4">Headquarters</p>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>123 Innovation Drive</p>
                  <p>San Francisco, CA 94105</p>
                  <p>+1 (555) 123-4567</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">New York</h3>
                <p className="text-muted-foreground mb-4">East Coast Operations</p>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>456 Tech Avenue</p>
                  <p>New York, NY 10001</p>
                  <p>+1 (555) 987-6543</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">London</h3>
                <p className="text-muted-foreground mb-4">European Hub</p>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>789 Digital Street</p>
                  <p>London, UK EC1A 1BB</p>
                  <p>+44 20 7123 4567</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media & Additional Contact */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Connect With Us</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Follow us on social media for the latest updates, insights, and industry news.
            </p>
            <div className="flex justify-center gap-6 mb-12">
              <Button variant="outline" size="lg" className="rounded-full bg-transparent">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" size="lg" className="rounded-full bg-transparent">
                <Twitter className="h-5 w-5 mr-2" />
                Twitter
              </Button>
              <Button variant="outline" size="lg" className="rounded-full bg-transparent">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </Button>
            </div>
            <div className="bg-primary/5 rounded-lg p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">Need Immediate Assistance?</h3>
              <p className="text-muted-foreground mb-6">
                For urgent matters or technical emergencies, our support team is available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6">
                  Emergency Support
                  <Phone className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                  Schedule Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
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
