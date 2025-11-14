import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Mail,
  Phone,
  Share2,
  Search,
  Zap,
  CheckCircle2,
} from 'lucide-react'
import { SignIn, useUser } from '@clerk/tanstack-react-start'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  const [url, setUrl] = useState('')
  const [showSignIn, setShowSignIn] = useState(false)
  const { isSignedIn, user } = useUser()

  const handleSubmit = () => {
    if (isSignedIn) {
      // Handle the URL submission for crawling
      console.log('Crawling URL:', url)
      // TODO: Implement actual crawling logic
    } else {
      setShowSignIn(true)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Search className="h-6 w-6" />
            <span className="text-xl font-semibold">ReachFinder</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm hover:underline">
              Features
            </a>
            <a href="#pricing" className="text-sm hover:underline">
              Pricing
            </a>
            <a href="#faq" className="text-sm hover:underline">
              FAQ
            </a>
            <Button variant="outline" size="sm" onClick={() => setShowSignIn(true)}>
              {isSignedIn ? 'Dashboard' : 'Log In'}
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section with Chat Interface */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Find Contact Information
            <br />
            <span className="text-muted-foreground">From Any Website</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Paste a URL and let AI crawl the website to extract emails, phone numbers, and social media links instantly.
          </p>

          {/* Chat Interface */}
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    type="url"
                    placeholder="https://example.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="flex-1"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSubmit()
                      }
                    }}
                  />
                  <Button onClick={handleSubmit} size="lg">
                    Find Contacts
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground text-left">
                  Enter a website URL to start extracting contact information
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="border-t py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Powerful AI-driven contact extraction with simple paste-and-go functionality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <div className="mb-4 p-3 w-fit rounded-lg bg-primary/10">
                  <Mail className="h-8 w-8" />
                </div>
                <CardTitle>Extract All Emails</CardTitle>
                <CardDescription>
                  Automatically discover and extract all email addresses from any website. Our AI scans every page to find contact emails, support addresses, and more.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Email extraction preview</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 p-3 w-fit rounded-lg bg-primary/10">
                  <Phone className="h-8 w-8" />
                </div>
                <CardTitle>Find Phone Numbers</CardTitle>
                <CardDescription>
                  Detect phone numbers in any format from websites. Whether they're in headers, footers, or contact pages, we'll find them all.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Phone detection preview</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 p-3 w-fit rounded-lg bg-primary/10">
                  <Share2 className="h-8 w-8" />
                </div>
                <CardTitle>Social Media Links</CardTitle>
                <CardDescription>
                  Gather all social media profiles including Twitter, LinkedIn, Facebook, Instagram, and more. Connect with businesses across all platforms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Social links preview</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="border-t py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple Pricing
            </h2>
            <p className="text-muted-foreground">
              One-time purchase. No subscriptions. Credits never expire.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <CardDescription>Perfect for trying out the service</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="text-4xl font-bold">$5</div>
                  <div className="text-sm text-muted-foreground">One-time purchase</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>50 website scans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Extract emails, phones & social media</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Export results as CSV</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Credits never expire</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Get Started
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="text-2xl">Professional</CardTitle>
                <CardDescription>Best value for regular users</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="text-4xl font-bold">$15</div>
                  <div className="text-sm text-muted-foreground">One-time purchase</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>200 website scans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Extract emails, phones & social media</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Export results as CSV</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Credits never expire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Priority processing</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="border-t py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>How does the website crawling work?</AccordionTrigger>
              <AccordionContent>
                Our AI-powered crawler visits the website you provide and intelligently scans all accessible pages to find contact information including email addresses, phone numbers, and social media links. The process typically takes just a few seconds.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Do credits expire?</AccordionTrigger>
              <AccordionContent>
                No, credits never expire. Once you purchase a package, you can use your credits whenever you need them without any time limits.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What information can I extract?</AccordionTrigger>
              <AccordionContent>
                You can extract email addresses, phone numbers in various formats, and social media profile links from platforms like Twitter, LinkedIn, Facebook, Instagram, YouTube, and more.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Is this legal?</AccordionTrigger>
              <AccordionContent>
                Yes, our service only extracts publicly available information from websites. However, you should always use the extracted information in compliance with applicable privacy laws and regulations like GDPR and CAN-SPAM Act.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Can I export the results?</AccordionTrigger>
              <AccordionContent>
                Yes, all extracted contact information can be exported as a CSV file for easy integration with your CRM or other tools.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Search className="h-5 w-5" />
                <span className="font-semibold">ReachFinder</span>
              </div>
              <p className="text-sm text-muted-foreground">
                &copy; 2025 ReachFinder. All rights reserved.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#features" className="text-muted-foreground hover:underline">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-muted-foreground hover:underline">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-muted-foreground hover:underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:underline">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:underline">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:support@reachfinder.com" className="text-muted-foreground hover:underline">
                    support@reachfinder.com
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:underline">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:underline">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Sign In Dialog */}
      <Dialog open={showSignIn} onOpenChange={setShowSignIn}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Sign in to continue</DialogTitle>
            <DialogDescription>
              Sign in to your account to start extracting contact information from websites.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-center py-4">
            <SignIn />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
