import { Shield, Eye, Lock, Users, Database, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, use our services, or contact us. This may include your name, email address, reading preferences, and usage patterns."
    },
    {
      icon: Database,
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, personalize your experience, communicate with you, and ensure the security of our platform."
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law."
    },
    {
      icon: Lock,
      title: "Data Security",
      content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction, including encryption and secure servers."
    },
    {
      icon: Settings,
      title: "Your Rights",
      content: "You have the right to access, update, or delete your personal information. You can also control your privacy settings and opt out of certain communications through your account settings."
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-8">
            <Shield className="w-10 h-10" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Your Privacy Matters to Us
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            This privacy policy explains how VineX collects, uses, and protects your personal information 
            when you use our platforms and services.
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
          <h2 className="text-4xl font-bold mb-8 text-center">Privacy Overview</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-center mb-12 text-xl leading-relaxed">
              At VineX, we believe privacy is a fundamental right. We're committed to being transparent 
              about what data we collect, how we use it, and giving you control over your information.
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

      {/* Detailed Sections */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">1. Information Collection</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>We collect several types of information:</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li><strong>Account Information:</strong> Name, email address, password, and profile details</li>
                  <li><strong>Usage Data:</strong> Reading history, preferences, time spent on content</li>
                  <li><strong>Device Information:</strong> Browser type, operating system, IP address</li>
                  <li><strong>Communications:</strong> Messages you send us and feedback you provide</li>
                </ul>
              </div>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">2. How We Use Information</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>Your information helps us:</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Provide and personalize our services</li>
                  <li>Recommend content you might enjoy</li>
                  <li>Communicate important updates and features</li>
                  <li>Improve our platforms based on usage patterns</li>
                  <li>Ensure security and prevent fraud</li>
                </ul>
              </div>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">3. Cookies and Tracking</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  We use cookies and similar technologies to enhance your experience, remember your preferences, 
                  and analyze usage patterns. You can control cookie settings through your browser, though some 
                  features may not work properly if cookies are disabled.
                </p>
              </div>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">4. Data Retention</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  We retain your information for as long as your account is active or as needed to provide services. 
                  If you delete your account, we will delete your personal information within 30 days, except for 
                  information we're required to keep for legal or security purposes.
                </p>
              </div>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">5. Third-Party Services</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  We may use third-party services for analytics, payment processing, and other functions. 
                  These services have their own privacy policies, and we encourage you to review them. 
                  We only share the minimum information necessary for these services to function.
                </p>
              </div>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">6. Children's Privacy</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Our services are not intended for children under 13. We do not knowingly collect personal 
                  information from children under 13. If we become aware that we have collected such information, 
                  we will delete it immediately.
                </p>
              </div>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">7. International Users</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  If you're using our services from outside the United States, please note that your information 
                  may be transferred to and stored in the US. We comply with applicable international privacy laws 
                  and regulations.
                </p>
              </div>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">8. Changes to This Policy</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  We may update this privacy policy from time to time. We'll notify you of any significant changes 
                  via email or through our platform. Your continued use of our services after such modifications 
                  constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Privacy?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            If you have any questions about this privacy policy or how we handle your data, 
            please don't hesitate to contact us.
          </p>
          <div className="text-muted-foreground">
            <p><strong>Email:</strong> privacy@vinex.com</p>
            <p><strong>Address:</strong> 123 Innovation Drive, San Francisco, CA 94105</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;