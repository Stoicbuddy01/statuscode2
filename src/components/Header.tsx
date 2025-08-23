import { Button } from "@/components/ui/button";
import { Shield, Heart } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-white/20 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-health-gradient rounded-xl flex items-center justify-center shadow-lg">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold text-gray-900">HealthGuard</span>
            <p className="text-xs text-gray-500">Product Analysis</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-health-primary font-medium transition-colors">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-health-primary font-medium transition-colors">
            Features
          </a>
          <a href="#" className="text-gray-600 hover:text-health-primary font-medium transition-colors">
            Analysis
          </a>
          <a href="#" className="text-gray-600 hover:text-health-primary font-medium transition-colors">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <Button className="hidden md:inline-flex bg-health-primary hover:bg-health-primary/90 text-white">
          <Heart className="w-4 h-4 mr-2" />
          Try Extension
        </Button>

        {/* Mobile menu button */}
        <Button variant="ghost" size="sm" className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Header;