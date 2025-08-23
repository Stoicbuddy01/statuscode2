import { Button } from "@/components/ui/button";
import { Zap, Shield, Brain, Database } from "lucide-react";
import ProductAnalysisMockup from "./ProductAnalysisMockup";
import RiskDetectionMockup from "./RiskDetectionMockup";

const FeaturesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative">
      {/* Blurred Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-health-primary/20 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-health-secondary/20 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-health-primary/10 rounded-full px-4 py-2 mb-4">
            <Brain className="w-4 h-4 text-health-primary mr-2" />
            <span className="text-health-primary font-medium text-sm">Smart Analysis</span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
            Advanced Health Analysis for<br />
            Every <span className="text-health-primary">Product</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our AI-powered extension scans product labels, ingredients, and health data to provide instant insights about benefits and risks.
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-16 lg:space-y-24">
          {/* Real-Time Product Analysis Feature */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-health-gradient rounded-xl flex items-center justify-center mr-3">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-health-primary font-semibold">Real-Time Analysis</span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Instant Product Scanning
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Simply hover over any product on any website and get immediate health insights. Our extension analyzes ingredients, nutritional values, and potential allergens in real-time, providing you with comprehensive health information before you buy.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center bg-success/10 rounded-full px-3 py-1">
                  <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                  <span className="text-success text-sm font-medium">Ingredient Analysis</span>
                </div>
                <div className="flex items-center bg-health-warning/10 rounded-full px-3 py-1">
                  <div className="w-2 h-2 bg-health-warning rounded-full mr-2"></div>
                  <span className="text-health-warning text-sm font-medium">Allergen Detection</span>
                </div>
              </div>
              
              <Button className="bg-health-primary hover:bg-health-primary/90">
                <Database className="w-4 h-4 mr-2" />
                Learn More
              </Button>
            </div>
            
            <div className="mt-8 lg:mt-0">
              <ProductAnalysisMockup />
            </div>
          </div>

          {/* Risk Detection Feature */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 mt-8 lg:mt-0">
              <RiskDetectionMockup />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-health-gradient rounded-xl flex items-center justify-center mr-3">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-health-primary font-semibold">Risk Detection</span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Smart Risk Assessment
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our AI continuously monitors health databases and scientific research to identify potential risks associated with product ingredients. Get personalized warnings based on your health profile and known sensitivities.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center bg-health-danger/10 rounded-full px-3 py-1">
                  <div className="w-2 h-2 bg-health-danger rounded-full mr-2"></div>
                  <span className="text-health-danger text-sm font-medium">Harmful Substances</span>
                </div>
                <div className="flex items-center bg-health-warning/10 rounded-full px-3 py-1">
                  <div className="w-2 h-2 bg-health-warning rounded-full mr-2"></div>
                  <span className="text-health-warning text-sm font-medium">Drug Interactions</span>
                </div>
              </div>
              
              <Button className="bg-health-primary hover:bg-health-primary/90">
                <Shield className="w-4 h-4 mr-2" />
                View Protection
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;