
import { useState } from "react";
import { Star, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Star className="w-8 h-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-900">CarouselMagic</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Features</a>
            <a href="#templates" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Templates</a>
            <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Pricing</a>
            <a href="#help" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Help</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-purple-600">
              Sign In
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Start Free
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-purple-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Features</a>
              <a href="#templates" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Templates</a>
              <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Pricing</a>
              <a href="#help" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Help</a>
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-purple-600">
                  Sign In
                </Button>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Start Free
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
