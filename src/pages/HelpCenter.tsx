import { HelpCircle, Search, Book, Users, Settings, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HelpCenter = () => {
  const categories = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics of using VineX platforms",
      articles: 12
    },
    {
      icon: Users,
      title: "Account & Billing",
      description: "Manage your account settings and subscriptions",
      articles: 8
    },
    {
      icon: Settings,
      title: "Technical Support",
      description: "Troubleshoot common technical issues",
      articles: 15
    },
    {
      icon: MessageCircle,
      title: "Community Guidelines",
      description: "Rules and best practices for our community",
      articles: 6
    }
  ];

  const faqs = [
    {
      question: "How do I create an account on VineNovels?",
      answer: "Creating an account is simple! Click the 'Get Started' button on any page, then follow the sign-up process. You can register with your email address or use social login options like Google or Facebook."
    },
    {
      question: "Is VineNovels free to use?",
      answer: "VineNovels offers both free and premium tiers. Free users can access a selection of stories with ads, while premium subscribers get unlimited access to all content, ad-free reading, and exclusive features like offline downloads."
    },
    {
      question: "How does the audio narration work?",
      answer: "Our stories feature professional audio narration that plays automatically as you read. You can control playback speed, skip sections, or turn off audio entirely in your reading preferences."
    },
    {
      question: "Can I read stories offline?",
      answer: "Yes! Premium subscribers can download stories for offline reading. Simply tap the download button on any story page, and it will be available in your library for offline access."
    },
    {
      question: "How do I submit my own story?",
      answer: "We're currently working on creator tools for VineInspire, which will allow writers to submit and publish their own stories. Join our waitlist to be notified when this feature becomes available."
    },
    {
      question: "What devices are supported?",
      answer: "VineX platforms work on all modern web browsers, including Chrome, Firefox, Safari, and Edge. We also have mobile-optimized versions for smartphones and tablets."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription anytime in your account settings under 'Billing & Subscriptions'. Your premium access will continue until the end of your current billing period."
    },
    {
      question: "Is my reading data private?",
      answer: "Yes, we take privacy seriously. Your reading history and personal data are encrypted and never shared with third parties. You can review our full privacy policy for more details."
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-8">
            <HelpCircle className="w-10 h-10" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Help Center
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Find answers to your questions
          </p>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-white/60" />
              <Input 
                placeholder="Search for help..." 
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Browse by Category</h2>
            <p className="text-xl text-muted-foreground">
              Find help articles organized by topic
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={category.title} className="text-center hover-lift cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <Badge variant="secondary">{category.articles} articles</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-background rounded-lg border px-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero">
              <MessageCircle className="w-4 h-4 mr-2" />
              Start Live Chat
            </Button>
            <Button variant="outline">
              <HelpCircle className="w-4 h-4 mr-2" />
              Submit a Ticket
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Average response time: 2 hours
          </p>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;