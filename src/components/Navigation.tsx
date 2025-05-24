
import { useState } from "react";
import { Star, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    return location.pathname.startsWith(path) && path !== "/";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Star className="w-8 h-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-900">CarouselMagic</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/#features" 
              className={`text-gray-600 hover:text-purple-600 transition-colors font-medium ${
                isActive("/#features") ? "text-purple-600" : ""
              }`}
            >
              Features
            </Link>
            <Link 
              to="/templates" 
              className={`text-gray-600 hover:text-purple-600 transition-colors font-medium ${
                isActive("/templates") ? "text-purple-600" : ""
              }`}
            >
              Templates
            </Link>
            <Link 
              to="/#pricing" 
              className={`text-gray-600 hover:text-purple-600 transition-colors font-medium ${
                isActive("/#pricing") ? "text-purple-600" : ""
              }`}
            >
              Pricing
            </Link>
            <Link 
              to="/help" 
              className={`text-gray-600 hover:text-purple-600 transition-colors font-medium ${
                isActive("/help") ? "text-purple-600" : ""
              }`}
            >
              Help
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/auth">
              <Button variant="ghost" className="text-gray-600 hover:text-purple-600">
                Sign In
              </Button>
            </Link>
            <Link to="/auth">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Start Free
              </Button>
            </Link>
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
              <Link 
                to="/#features" 
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/templates" 
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Templates
              </Link>
              <Link 
                to="/#pricing" 
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/help" 
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Help
              </Link>
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-purple-600">
                    Sign In
                  </Button>
                </Link>
                <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Start Free
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
