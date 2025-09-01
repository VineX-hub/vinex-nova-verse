import { FileText, AlertTriangle, Users, CreditCard, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  const sections = [
    {
      icon: Users,
      title: "User Accounts",
      content: "You must create an account to access certain features. You're responsible for maintaining the security of your account and all activities under it."
    },
    {
      icon: FileText,
      title: "Content Usage",
      content: "Our content is protected by copyright. You may use it for personal, non-commercial purposes only. Sharing or distributing our content is prohibited."
    },
    {
      icon: CreditCard,
      title: "Payments & Subscriptions",
      content: "Premium subscriptions are billed monthly or annually. You can cancel anytime, but refunds are subject to our refund policy."
    },
    {
      icon: Shield,
      title: "Acceptable Use",
      content: "You agree not to misuse our services, engage in harmful activities, or violate any laws while using our platforms."
    },
    {
      icon: AlertTriangle,
      title: "Service Availability",
      content: "We strive for 99.9% uptime but cannot guarantee uninterrupted service. We reserve the right to modify or discontinue features with notice."
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-8">
            <FileText className="w-10 h-10" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Our Agreement with You
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            These terms of service govern your use of VineX platforms and services. 
            By using our services, you agree to these terms.
          </p>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-card">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            <strong>Last Updated:</strong> January 1, 2024
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Terms Overview</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-center mb-12 text-xl leading-relaxed">
              These terms establish the rules and guidelines for using VineX services. 
              We've organized them into key sections for easy understanding.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <Card key={section.title} className="hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mr-4">
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{section.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{section.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">1. Acceptance of Terms</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  By accessing or using VineX services, you agree to be bound by these Terms of Service 
                  and our Privacy Policy. If you disagree with any part of these terms, you may not 
                  access or use our services.
                </p>
              </div>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">2. Description of Service</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>VineX provides:</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li><strong>VineNovels:</strong> Immersive story reading with audio narration</li>
                  <li><strong>VineInspire:</strong> Creative writing tools and community (coming soon)</li>
                  <li><strong>VineLearn:</strong> Educational content and courses (coming soon)</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to modify, suspend, or discontinue any part of our services 
                  at any time with reasonable notice.
                </p>
              </div>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">3. User Accounts</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>Account requirements and responsibilities:</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>You must be at least 13 years old to create an account</li>
                  <li>Provide accurate and complete information during registration</li>
                  <li>Maintain the security and confidentiality of your login credentials</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                  <li>You are responsible for all activities that occur under your account</li>
                </ul>
              </div>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">4. Intellectual Property</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  All content on VineX platforms, including stories, audio, graphics, and software, 
                  is protected by intellectual property laws. You may not copy, distribute, modify, 
                  or create derivative works without our explicit permission.
                </p>
                <p className="mt-4">
                  <strong>Permitted Use:</strong> You may access and use our content for personal, 
                  non-commercial purposes only. You may not share your account credentials or 
                  distribute our content to others.
                </p>
              </div>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">5. Payment Terms</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>For premium subscriptions:</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Subscriptions are billed in advance on a monthly or annual basis</li>
                  <li>Payment is due immediately upon subscription activation</li>
                  <li>Subscriptions auto-renew unless cancelled before the renewal date</li>
                  <li>Refunds are available within 14 days of initial subscription only</li>
                  <li>Price changes will be communicated 30 days in advance</li>
                </ul>
              </div>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">6. Prohibited Activities</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Upload malicious code or attempt to hack our systems</li>
                  <li>Create multiple accounts to circumvent restrictions</li>
                  <li>Use automated tools to access our services</li>
                  <li>Share inappropriate or harmful content</li>
                  <li>Harass or abuse other users</li>
                </ul>
              </div>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">7. Disclaimers and Limitations</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  VineX services are provided "as is" without warranties of any kind. We do not 
                  guarantee that our services will be error-free, secure, or continuously available. 
                  Our liability is limited to the maximum extent permitted by law.
                </p>
              </div>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">8. Termination</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Either party may terminate this agreement at any time. We may suspend or terminate 
                  your account if you violate these terms. Upon termination, your right to use our 
                  services ceases immediately.
                </p>
              </div>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">9. Changes to Terms</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  We may modify these terms at any time. We'll notify you of significant changes 
                  via email or through our platform. Continued use of our services after changes 
                  constitutes acceptance of the new terms.
                </p>
              </div>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">10. Contact Information</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  For questions about these terms, please contact us at:
                </p>
                <div className="mt-4">
                  <p><strong>Email:</strong> legal@vinex.com</p>
                  <p><strong>Address:</strong> VineX Legal Department<br />
                  123 Innovation Drive<br />
                  San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;