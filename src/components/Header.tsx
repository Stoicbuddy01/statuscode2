import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* Top Left - Logo with Stylish Design */}
      {/* <div className="fixed top-6 left-6 z-50">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-health-primary to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
          <div className="relative flex items-center space-x-3 bg-white/20 backdrop-blur-xl rounded-2xl px-5 py-3 shadow-xl border border-white/30">
            <div className="w-9 h-9 bg-health-gradient rounded-xl flex items-center justify-center shadow-lg">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold text-gray-900">HealthGuard</span>
              <p className="text-xs text-gray-600/80 leading-none">Product Analysis</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Top Right - Get Started Button */}
      <div className="fixed top-6 right-6 z-50">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-health-primary to-purple-600 rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-300"></div>
          {/* --- CHANGE: Wrapped Button with Link --- */}
          <Link to="/user-input">
            <Button className="relative bg-health-primary/90 hover:bg-health-primary text-white backdrop-blur-xl rounded-2xl px-6 py-3 shadow-xl border border-white/20 transition-all duration-300 hover:scale-105 group">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
          {/* --- END CHANGE --- */}
        </div>
      </div>

      {/* Center Navigation - Ultra Stylish and Curved */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40">
        <div className="relative group">
          {/* Glowing Background Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-health-primary/20 via-blue-500/20 to-health-primary/20 rounded-3xl blur-sm opacity-30 group-hover:opacity-50 transition duration-500"></div>
          
          {/* Main Navigation Container */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-2xl border border-white/30 shadow-2xl">
            
            {/* Navigation Links */}
            <nav className="px-10 py-5">
              <div className="flex items-center space-x-10">
                {[
                  { to: "/", label: "Home" },
                  { to: "/features", label: "Features" },
                  { to: "/analysis", label: "Analysis" },
                  { to: "/contact", label: "Contact" }
                ].map((link) => (
                  <Link 
                    key={link.to}
                    to={link.to} 
                    className="relative text-gray-800/90 hover:text-health-primary font-semibold transition-all duration-300 text-sm hover:scale-110 group/link"
                  >
                    {link.label}
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-health-primary to-blue-500 transition-all duration-300 group-hover/link:w-full rounded-full"></span>
                    <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-health-primary/50 transition-all duration-300 group-hover/link:w-1/2 rounded-full"></span>
                  </Link>
                ))}
              </div>
            </nav>

            {/* Animated Curved Bottom Edge */}
            <div className="absolute -bottom-6 left-0 w-full overflow-hidden">
              <svg 
                className="relative block w-full h-10 animate-pulse" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 800 100" 
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="stylishGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                    <stop offset="25%" stopColor="rgba(59,130,246,0.1)" />
                    <stop offset="50%" stopColor="rgba(255,255,255,0.08)" />
                    <stop offset="75%" stopColor="rgba(139,69,243,0.1)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
                  </linearGradient>
                </defs>
                <path 
                  d="M0,50 Q200,100 400,50 Q600,0 800,50 L800,0 L0,0 Z" 
                  fill="url(#stylishGradient)"
                />
              </svg>
            </div>

            {/* Floating Decorative Particles */}
            <div className="absolute top-3 left-6 w-1 h-1 bg-health-primary/40 rounded-full animate-ping"></div>
            <div className="absolute top-5 right-8 w-1 h-1 bg-blue-500/40 rounded-full animate-pulse"></div>
            <div className="absolute bottom-3 left-12 w-1 h-1 bg-purple-500/40 rounded-full animate-bounce"></div>
            <div className="absolute bottom-4 right-16 w-1 h-1 bg-health-primary/30 rounded-full animate-pulse"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;