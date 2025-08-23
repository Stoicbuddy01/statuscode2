import { AlertTriangle, CheckCircle, Heart, Pill, Leaf } from "lucide-react";

const HealthDashboardMockup = () => {
  return (
    <div className="relative">
      {/* Main Health Analysis Card */}
      <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-6 max-w-md mx-auto border border-white/20">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-gray-500">Product Analysis</p>
            <p className="text-xs text-gray-400">Vitamin D3 Supplement</p>
          </div>
          <div className="text-right">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-success rounded-full mr-2"></div>
              <span className="text-sm font-medium text-gray-600">Safe</span>
            </div>
            <p className="text-xs text-gray-400">95% Health Score</p>
          </div>
        </div>

        {/* Health Score Ring */}
        <div className="flex justify-center mb-6">
          <div className="relative w-24 h-24">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-gray-200"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${95 * 2.51} 251`}
                className="text-health-primary"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold text-health-primary">95%</span>
            </div>
          </div>
        </div>

        {/* Benefits & Risks */}
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
              <CheckCircle className="w-4 h-4 text-success mr-2" />
              Health Benefits
            </h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-success/10 rounded-lg p-2">
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-success" />
                  <span className="text-sm text-gray-700">Bone Health</span>
                </div>
                <span className="text-xs text-success font-medium">High</span>
              </div>
              <div className="flex items-center justify-between bg-success/10 rounded-lg p-2">
                <div className="flex items-center space-x-2">
                  <Leaf className="w-4 h-4 text-success" />
                  <span className="text-sm text-gray-700">Immune Support</span>
                </div>
                <span className="text-xs text-success font-medium">High</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
              <AlertTriangle className="w-4 h-4 text-health-warning mr-2" />
              Potential Risks
            </h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-health-warning/10 rounded-lg p-2">
                <div className="flex items-center space-x-2">
                  <Pill className="w-4 h-4 text-health-warning" />
                  <span className="text-sm text-gray-700">High Doses</span>
                </div>
                <span className="text-xs text-health-warning font-medium">Low</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="bg-gray-50 rounded-lg p-2">
            <p className="text-xs text-gray-500 mb-1">Ingredients</p>
            <p className="text-sm font-semibold text-gray-700">Clean</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-2">
            <p className="text-xs text-gray-500 mb-1">Allergens</p>
            <p className="text-sm font-semibold text-gray-700">None</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-2">
            <p className="text-xs text-gray-500 mb-1">Quality</p>
            <p className="text-sm font-semibold text-success">Premium</p>
          </div>
        </div>
      </div>

      {/* Floating Analysis Cards */}
      <div className="absolute -top-4 -left-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-success rounded-full"></div>
          <span className="text-xs text-gray-600">FDA Approved</span>
        </div>
      </div>

      <div className="absolute -bottom-4 -right-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="w-3 h-3 text-health-warning" />
          <span className="text-xs text-gray-600">Check Dosage</span>
        </div>
      </div>
    </div>
  );
};

export default HealthDashboardMockup;