import { useState } from "react";
import { Zap, Download, Palette, Star, Video, Crown, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [activeDemo, setActiveDemo] = useState(0);

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "Drag & Drop Builder",
      description: "Intuitive interface with live preview. Create professional carousels in minutes, not hours.",
      demo: "Interactive builder with real-time updates",
      color: "purple"
    },
    {
      icon: <Palette className="w-8 h-8 text-pink-600" />,
      title: "Premium Templates",
      description: "100+ professionally designed templates for quotes, tips, tutorials, and promotional content.",
      demo: "Access to exclusive design library",
      color: "pink"
    },
    {
      icon: <Download className="w-8 h-8 text-orange-600" />,
      title: "Multiple Export Formats",
      description: "Export as PNG, PDF, or ZIP. Perfect for Instagram, LinkedIn, Pinterest, and more platforms.",
      demo: "One-click export in multiple formats",
      color: "orange"
    },
    {
      icon: <Video className="w-8 h-8 text-blue-600" />,
      title: "Ad-Free with Video",
      description: "Watch a short video ad to remove watermarks instantly. No subscription required!",
      demo: "30-second ad unlocks watermark-free exports",
      color: "blue"
    },
    {
      icon: <Crown className="w-8 h-8 text-yellow-600" />,
      title: "Premium Subscriptions",
      description: "Unlock unlimited exports, exclusive templates, custom branding, and cloud storage.",
      demo: "Full access to all premium features",
      color: "yellow"
    },
    {
      icon: <Star className="w-8 h-8 text-green-600" />,
      title: "AI-Powered Suggestions",
      description: "Get smart recommendations for headlines, layouts, and color schemes based on your content.",
      demo: "AI analyzes and suggests improvements",
      color: "green"
    }
  ];

  const demoContent = [
    {
      title: "Real-time Editing",
      description: "See changes instantly as you type and customize",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Template Gallery",
      description: "Choose from hundreds of professional designs",
      gradient: "from-pink-500 to-orange-500"
    },
    {
      title: "Export Options",
      description: "Download in the perfect format for your platform",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Ad Unlock",
      description: "Quick ad viewing removes watermarks for 24 hours",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Premium Access",
      description: "Unlimited everything with premium subscription",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "AI Assistant",
      description: "Smart suggestions improve your content automatically",
      gradient: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Everything You Need to Create
            <span className="block text-purple-600">Viral Social Content</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From beginner-friendly tools to advanced features for power users. 
            Start free and upgrade when you're ready.
          </p>
        </div>

        {/* Interactive Demo Section */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Try Interactive Demo
                </h3>
                <div className="space-y-3">
                  {demoContent.map((demo, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                        activeDemo === index 
                          ? 'bg-purple-100 border-l-4 border-purple-600' 
                          : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveDemo(index)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">{demo.title}</h4>
                          <p className="text-sm text-gray-600">{demo.description}</p>
                        </div>
                        <ChevronRight className={`w-5 h-5 text-purple-600 transition-transform duration-200 ${
                          activeDemo === index ? 'rotate-90' : ''
                        }`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className={`bg-gradient-to-br ${demoContent[activeDemo].gradient} aspect-square rounded-xl p-8 flex items-center justify-center text-white transition-all duration-500 transform hover:scale-105`}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      {features[activeDemo]?.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-2">{demoContent[activeDemo].title}</h4>
                    <p className="text-white/90">{demoContent[activeDemo].description}</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                  <span className="text-sm font-medium text-gray-600">Live Demo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white group cursor-pointer"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <CardContent className="p-8">
                <div className={`mb-6 transition-transform duration-300 ${
                  hoveredFeature === index ? 'scale-110' : ''
                }`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                
                {/* Interactive demo hint */}
                <div className={`transition-all duration-300 overflow-hidden ${
                  hoveredFeature === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700 font-medium">{feature.demo}</p>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="mt-2 text-purple-600 hover:text-purple-700 p-0 h-auto"
                      onClick={() => setActiveDemo(index)}
                    >
                      Try it now →
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Statistics */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-gray-600">Premium Templates</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-200">
              <div className="text-3xl font-bold text-pink-600 mb-2">50K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-200">
              <div className="text-3xl font-bold text-orange-600 mb-2">2M+</div>
              <div className="text-gray-600">Carousels Created</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-200">
              <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
