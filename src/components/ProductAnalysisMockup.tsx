import { AlertTriangle, CheckCircle, Pill, Leaf, Star, Eye } from "lucide-react";

const ProductAnalysisMockup = () => {
  return (
    <div className="relative">
      {/* Main Product Analysis Card */}
      <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-6 max-w-md mx-auto border border-white/20">
        {/* Product Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-health-primary to-health-primary-light rounded-xl flex items-center justify-center">
              <Pill className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Multivitamin Gummies</h4>
              <p className="text-xs text-gray-500">Nature&apos;s Way Brand</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-health-accent mr-1" />
              <span className="text-sm font-medium">4.8</span>
            </div>
          </div>
        </div>

        {/* Quick Analysis */}
        <div className="bg-success/10 rounded-lg p-3 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-success mr-2" />
              <span className="text-success font-medium text-sm">Generally Safe</span>
            </div>
            <span className="text-success text-sm">92% Score</span>
          </div>
        </div>

        {/* Ingredient Analysis */}
        <div className="space-y-3 mb-4">
          <h5 className="text-sm font-semibold text-gray-700">Key Ingredients</h5>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm text-gray-700">Vitamin C</span>
              </div>
              <span className="text-xs text-success font-medium">Beneficial</span>
            </div>
            
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm text-gray-700">Vitamin D3</span>
              </div>
              <span className="text-xs text-success font-medium">Beneficial</span>
            </div>
            
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-health-warning rounded-full"></div>
                <span className="text-sm text-gray-700">Added Sugar</span>
              </div>
              <span className="text-xs text-health-warning font-medium">Moderate</span>
            </div>
          </div>
        </div>

        {/* Health Benefits */}
        <div className="mb-4">
          <h5 className="text-sm font-semibold text-gray-700 mb-2">Health Benefits</h5>
          <div className="flex flex-wrap gap-2">
            <div className="bg-success/10 rounded-full px-3 py-1">
              <span className="text-success text-xs font-medium">Immune Support</span>
            </div>
            <div className="bg-success/10 rounded-full px-3 py-1">
              <span className="text-success text-xs font-medium">Bone Health</span>
            </div>
            <div className="bg-success/10 rounded-full px-3 py-1">
              <span className="text-success text-xs font-medium">Energy Boost</span>
            </div>
          </div>
        </div>

        {/* Live Analysis Indicator */}
        <div className="flex items-center justify-center text-center">
          <div className="flex items-center bg-health-primary/10 rounded-full px-3 py-1">
            <div className="w-2 h-2 bg-health-primary rounded-full mr-2 animate-pulse"></div>
            <span className="text-health-primary text-xs font-medium">Live Analysis</span>
          </div>
        </div>
      </div>

      {/* Floating Scanner Effect */}
      <div className="absolute -top-2 -right-2 bg-health-primary/20 rounded-full p-2 backdrop-blur-sm">
        <Eye className="w-4 h-4 text-health-primary" />
      </div>
    </div>
  );
};

export default ProductAnalysisMockup;