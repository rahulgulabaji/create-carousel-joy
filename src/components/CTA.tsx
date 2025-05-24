
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white space-y-8 max-w-4xl mx-auto">
          {/* Main CTA */}
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Ready to Create
            <span className="block bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
              Viral Carousels?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join 50,000+ creators who are already using CarouselMagic to grow their social media presence.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 text-xl px-10 py-6 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Zap className="mr-2 w-6 h-6" />
              Start Creating Now
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 text-xl px-10 py-6 rounded-full font-bold backdrop-blur-sm"
            >
              Watch Demo Video
            </Button>
          </div>
          
          {/* Social proof */}
          <div className="pt-12 space-y-4">
            <div className="flex items-center justify-center space-x-8 text-white/80">
              <div className="text-center">
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-sm">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">2M+</div>
                <div className="text-sm">Carousels Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4.9★</div>
                <div className="text-sm">User Rating</div>
              </div>
            </div>
            
            <p className="text-white/70 text-sm">
              No credit card required • Start free • Upgrade anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
