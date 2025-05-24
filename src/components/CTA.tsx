
import { useState, useEffect } from "react";
import { ArrowRight, Zap, Play, Users, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "50K+", label: "Active Users", color: "text-blue-500" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "2M+", label: "Carousels Created", color: "text-green-500" },
    { icon: <Zap className="w-6 h-6" />, value: "4.9★", label: "User Rating", color: "text-yellow-500" },
    { icon: <Clock className="w-6 h-6" />, value: "2min", label: "Avg. Creation Time", color: "text-purple-500" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white space-y-8 max-w-4xl mx-auto">
          {/* Main CTA */}
          <h2 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
            Ready to Create
            <span className="block bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent animate-pulse">
              Viral Carousels?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join 50,000+ creators who are already using CarouselMagic to grow their social media presence.
          </p>
          
          {/* Dynamic stats display */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center space-x-4 transition-all duration-500">
              <div className={`${stats[currentStat].color} transition-colors duration-500`}>
                {stats[currentStat].icon}
              </div>
              <div>
                <div className="text-3xl font-bold">{stats[currentStat].value}</div>
                <div className="text-white/80 text-sm">{stats[currentStat].label}</div>
              </div>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {stats.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentStat ? 'bg-white scale-125' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 text-xl px-10 py-6 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              <Zap className="mr-2 w-6 h-6 group-hover:animate-pulse" />
              Start Creating Now
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 text-xl px-10 py-6 rounded-full font-bold backdrop-blur-sm group animate-fade-in"
              style={{ animationDelay: '0.8s' }}
              onClick={() => setIsVideoPlaying(!isVideoPlaying)}
            >
              <Play className={`mr-2 w-6 h-6 transition-all duration-200 ${isVideoPlaying ? 'scale-110' : ''}`} />
              {isVideoPlaying ? 'Playing Demo...' : 'Watch Demo Video'}
            </Button>
          </div>
          
          {/* Enhanced social proof */}
          <div className="pt-12 space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white/80">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`text-center transition-all duration-500 hover:scale-105 cursor-pointer ${
                    index === currentStat ? 'text-white scale-110' : ''
                  }`}
                  onClick={() => setCurrentStat(index)}
                >
                  <div className="flex justify-center mb-2">
                    <div className={`${stat.color} transition-colors duration-300`}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                  <div className="text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Trust indicators */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-8 text-white/70 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span>Start free</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span>Upgrade anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
