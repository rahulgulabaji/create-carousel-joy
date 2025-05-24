
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Social Media Manager",
      company: "TechCorp",
      content: "CarouselMagic transformed our social media strategy. We create professional carousels 10x faster than before. The ROI has been incredible!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Marcus Chen",
      role: "Content Creator",
      company: "150K Followers",
      content: "As a full-time creator, I need tools that work fast. The ad-removal feature is genius - I can export clean carousels without paying monthly!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "GrowthCo",
      content: "The premium templates are worth every penny. Our engagement increased 300% after switching to CarouselMagic. It's become essential to our workflow.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "David Park",
      role: "Freelance Designer",
      company: "Independent",
      content: "I use this for client work daily. The export quality is perfect, and my clients love the quick turnaround. Highly recommend for any designer!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Lisa Thompson",
      role: "E-commerce Manager",
      company: "ShopSmart",
      content: "Perfect for product announcements and sales. The templates are so professional, our customers think we have a dedicated design team!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Alex Rivera",
      role: "Agency Owner",
      company: "Creative Labs",
      content: "We manage 20+ client accounts. CarouselMagic's team features and custom branding save us hours every week. ROI was immediate.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Loved by 50,000+ Creators
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what content creators, marketers, and designers are saying about CarouselMagic
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-sm text-purple-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-200 rounded-full px-6 py-3">
            <Star className="w-5 h-5 text-green-600 fill-current" />
            <span className="text-green-800 font-medium">4.9/5 rating from 12,000+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
