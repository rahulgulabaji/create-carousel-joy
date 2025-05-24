
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Search, Book, Video, MessageCircle, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Help = () => {
  const faqs = [
    {
      question: "How do I create my first carousel?",
      answer: "Click 'Start Free' and you'll be taken to our drag-and-drop builder. Choose a template or start from scratch, add your content, and export when ready."
    },
    {
      question: "Can I remove the watermark for free?",
      answer: "Yes! Watch a short video ad and the watermark will be removed for that specific export. Premium users get watermark-free exports unlimited."
    },
    {
      question: "What export formats are available?",
      answer: "Free users can export as PNG. Premium users get PNG, PDF, and ZIP formats. All exports are high-resolution and social media ready."
    },
    {
      question: "How does the Premium subscription work?",
      answer: "Premium gives you unlimited exports, no watermarks, premium templates, cloud storage, and priority support for $9/month."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely! Cancel anytime from your account settings. You'll keep premium access until your current billing period ends."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied, contact support for a full refund."
    }
  ];

  const helpCategories = [
    {
      icon: <Book className="w-8 h-8 text-purple-600" />,
      title: "Getting Started",
      description: "Learn the basics of creating your first carousel",
      articles: 12
    },
    {
      icon: <Video className="w-8 h-8 text-blue-600" />,
      title: "Video Tutorials",
      description: "Step-by-step video guides for all features",
      articles: 8
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-600" />,
      title: "Templates & Design",
      description: "Make the most of our template library",
      articles: 15
    },
    {
      icon: <Mail className="w-8 h-8 text-orange-600" />,
      title: "Account & Billing",
      description: "Manage your subscription and payments",
      articles: 7
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How Can We Help?
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Find answers to common questions and learn how to make the most of CarouselMagic
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search for help..."
                className="pl-10 h-12"
              />
            </div>
          </div>

          {/* Help Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {helpCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <p className="text-sm text-purple-600 font-medium">
                    {category.articles} articles
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-16 text-center">
            <Card className="max-w-md mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Still Need Help?
                </h3>
                <p className="text-gray-600 mb-6">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <Button className="w-full">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Help;
