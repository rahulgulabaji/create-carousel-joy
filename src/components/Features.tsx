
import { Zap, Download, Palette, Star, Video, Crown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "Drag & Drop Builder",
      description: "Intuitive interface with live preview. Create professional carousels in minutes, not hours."
    },
    {
      icon: <Palette className="w-8 h-8 text-pink-600" />,
      title: "Premium Templates",
      description: "100+ professionally designed templates for quotes, tips, tutorials, and promotional content."
    },
    {
      icon: <Download className="w-8 h-8 text-orange-600" />,
      title: "Multiple Export Formats",
      description: "Export as PNG, PDF, or ZIP. Perfect for Instagram, LinkedIn, Pinterest, and more platforms."
    },
    {
      icon: <Video className="w-8 h-8 text-blue-600" />,
      title: "Ad-Free with Video",
      description: "Watch a short video ad to remove watermarks instantly. No subscription required!"
    },
    {
      icon: <Crown className="w-8 h-8 text-yellow-600" />,
      title: "Premium Subscriptions",
      description: "Unlock unlimited exports, exclusive templates, custom branding, and cloud storage."
    },
    {
      icon: <Star className="w-8 h-8 text-green-600" />,
      title: "AI-Powered Suggestions",
      description: "Get smart recommendations for headlines, layouts, and color schemes based on your content."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Create
            <span className="block text-purple-600">Viral Social Content</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From beginner-friendly tools to advanced features for power users. 
            Start free and upgrade when you're ready.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <CardContent className="p-8">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
