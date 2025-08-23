import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Zap, Shield } from "lucide-react";
import HealthDashboardMockup from "./HealthDashboardMockup";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-hero-gradient pt-20 pb-16 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <Shield className="w-4 h-4 text-white mr-2" />
              <span className="text-white text-sm font-medium">AI-Powered Health Analysis</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-hero-text mb-6 leading-tight"
            >
              Discover Product<br />
              <span className="text-health-accent">Health Benefits</span><br />
              & Hidden Risks
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-hero-text/90 mb-8 max-w-lg"
            >
              Our smart browser extension analyzes any product in real-time, revealing health benefits and potential risks to help you make informed decisions.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <motion.div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center">
                <Zap className="w-4 h-4 text-health-accent mr-2" />
                <span className="text-white text-sm">Instant Analysis</span>
              </motion.div>
              <motion.div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center">
                <Shield className="w-4 h-4 text-health-accent mr-2" />
                <span className="text-white text-sm">Risk Detection</span>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 max-w-md"
            >
              <motion.div>
                <Button size="lg" className="bg-white text-health-primary hover:bg-white/90 w-full sm:w-auto">
                  <Search className="w-4 h-4 mr-2" />
                  Install Extension
                </Button>
              </motion.div>
              <motion.div>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto">
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-white/20"
            >
              <p className="text-white/70 text-sm mb-4">Trusted by health-conscious users</p>
              <div className="flex items-center justify-between max-w-lg">
                {["10k+ Users", "FDA Database", "Real-time AI", "Privacy First", "Open Source"].map((item, i) => (
                  <motion.div key={i} className="text-hero-text/70 text-xs font-medium text-center">
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Content - Health Dashboard Mockup */}
          <div className="relative">
            <HealthDashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;