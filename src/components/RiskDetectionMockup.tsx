import { AlertTriangle, XCircle, Info, Shield, User } from "lucide-react";

const RiskDetectionMockup = () => {
  return (
    <div className="relative">
      {/* Main Risk Detection Card */}
      <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-6 max-w-md mx-auto border border-white/20">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-health-danger rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Risk Assessment</h4>
              <p className="text-xs text-gray-500">Energy Drink Analysis</p>
            </div>
          </div>
          <div className="flex items-center">
            <AlertTriangle className="w-5 h-5 text-health-warning mr-1" />
            <span className="text-sm font-medium text-health-warning">Caution</span>
          </div>
        </div>

        {/* Risk Level Indicator */}
        <div className="bg-health-warning/10 rounded-lg p-3 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-health-warning font-medium text-sm">Risk Level: Medium</span>
            <span className="text-health-warning text-sm">65%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-health-warning h-2 rounded-full" style={{ width: "65%" }}></div>
          </div>
        </div>

        {/* Detected Risks */}
        <div className="space-y-3 mb-4">
          <h5 className="text-sm font-semibold text-gray-700 flex items-center">
            <XCircle className="w-4 h-4 text-health-danger mr-2" />
            Detected Risks
          </h5>
          
          <div className="space-y-2">
            <div className="bg-health-danger/10 rounded-lg p-3">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="w-4 h-4 text-health-danger mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-800">High Caffeine Content</p>
                  <p className="text-xs text-gray-600">300mg - May cause anxiety, insomnia</p>
                </div>
              </div>
            </div>
            
            <div className="bg-health-warning/10 rounded-lg p-3">
              <div className="flex items-start space-x-2">
                <Info className="w-4 h-4 text-health-warning mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-800">Artificial Sweeteners</p>
                  <p className="text-xs text-gray-600">May affect gut health in sensitive individuals</p>
                </div>
              </div>
            </div>
            
            <div className="bg-health-danger/10 rounded-lg p-3">
              <div className="flex items-start space-x-2">
                <XCircle className="w-4 h-4 text-health-danger mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-800">Taurine Interaction</p>
                  <p className="text-xs text-gray-600">Check with doctor if taking heart medication</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Risk Factors */}
        <div className="mb-4">
          <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
            <User className="w-4 h-4 mr-2" />
            Personal Risk Factors
          </h5>
          <div className="bg-health-danger/5 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-health-danger rounded-full"></div>
              <span className="text-sm text-gray-700">Caffeine sensitivity detected</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-health-warning rounded-full"></div>
              <span className="text-sm text-gray-700">High blood pressure history</span>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-gray-50 rounded-lg p-3">
          <h6 className="text-xs font-semibold text-gray-600 mb-1">Recommendations</h6>
          <p className="text-xs text-gray-600">
            Consider alternatives with lower caffeine content or consult healthcare provider
          </p>
        </div>
      </div>

      {/* Floating Risk Alerts */}
      <div className="absolute -top-3 -left-3 bg-health-danger/20 backdrop-blur-sm rounded-lg p-2">
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-health-danger rounded-full animate-pulse"></div>
          <span className="text-xs text-health-danger font-medium">High Risk</span>
        </div>
      </div>

      <div className="absolute -bottom-3 -right-3 bg-health-warning/20 backdrop-blur-sm rounded-lg p-2">
        <div className="flex items-center space-x-1">
          <AlertTriangle className="w-3 h-3 text-health-warning" />
          <span className="text-xs text-health-warning font-medium">Caution</span>
        </div>
      </div>
    </div>
  );
};

export default RiskDetectionMockup;