
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white space-y-8 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 border border-white/30">
            <Star className="w-4 h-4 text-yellow-300 fill-current" />
            <span className="text-sm font-medium">Trusted by 50,000+ creators</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Create Stunning
            <span className="block bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
              Social Carousels
            </span>
            in Minutes
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Design professional carousels for Instagram, LinkedIn & Pinterest. 
            No design skills needed. Export in seconds.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Creating Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full font-semibold backdrop-blur-sm"
            >
              Watch Demo
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="pt-12 text-white/80">
            <p className="text-sm mb-4">Used by teams at</p>
            <div className="flex items-center justify-center space-x-8 opacity-70">
              <div className="text-2xl font-bold">Netflix</div>
              <div className="text-2xl font-bold">Spotify</div>
              <div className="text-2xl font-bold">Adobe</div>
              <div className="text-2xl font-bold">Shopify</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
