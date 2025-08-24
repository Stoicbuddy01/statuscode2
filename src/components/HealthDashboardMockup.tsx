import { AlertTriangle, CheckCircle, Heart, Pill, Leaf } from "lucide-react";
import { useState, useEffect } from "react";

const HealthDashboardMockup = () => {
  const [healthScore, setHealthScore] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const targetScore = 93;

  // Animate percentage on component mount
  useEffect(() => {
    setIsAnimating(true);
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetScore / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newScore = Math.min(Math.round(currentStep * increment), targetScore);
      setHealthScore(newScore);

      if (currentStep >= steps) {
        clearInterval(timer);
        setIsAnimating(false);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  // Calculate stroke dash array for the progress circle
  const circumference = 2 * Math.PI * 40; // radius = 40
  const strokeDasharray = `${(healthScore / 100) * circumference} ${circumference}`;

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
              <div 
                className={`w-3 h-3 rounded-full mr-2 transition-colors duration-500 ${
                  healthScore >= 80 
                    ? 'bg-green-500' 
                    : healthScore >= 60 
                    ? 'bg-yellow-500' 
                    : 'bg-red-500'
                }`}
              ></div>
              <span className="text-sm font-medium text-gray-600">
                {healthScore >= 80 ? 'Safe' : healthScore >= 60 ? 'Caution' : 'Risk'}
              </span>
            </div>
            <p className="text-xs text-gray-400">{healthScore}% Health Score</p>
          </div>
        </div>

        {/* Animated Health Score Ring */}
        <div className="flex justify-center mb-6">
          <div className="relative w-24 h-24">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-gray-200"
              />
              {/* Animated progress circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                strokeDasharray={strokeDasharray}
                strokeLinecap="round"
                className={`transition-all duration-75 ease-out ${
                  healthScore >= 80 
                    ? 'text-green-500' 
                    : healthScore >= 60 
                    ? 'text-yellow-500' 
                    : 'text-red-500'
                }`}
                style={{
                  transition: 'stroke-dasharray 0.1s ease-out, stroke 0.5s ease-out'
                }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span 
                className={`text-xl font-bold transition-all duration-300 ${
                  healthScore >= 80 
                    ? 'text-green-500' 
                    : healthScore >= 60 
                    ? 'text-yellow-500' 
                    : 'text-red-500'
                } ${isAnimating ? 'animate-pulse' : ''}`}
              >
                {healthScore}%
              </span>
            </div>
          </div>
        </div>

        {/* Benefits & Risks with Animation */}
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
              Health Benefits
            </h4>
            <div className="space-y-2">
              <div 
                className={`flex items-center justify-between bg-green-500/10 rounded-lg p-2 transform transition-all duration-500 delay-300 ${
                  healthScore > 30 ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600 font-medium">Bone Health</span>
                </div>
                <span className="text-xs text-green-600 font-medium">High</span>
              </div>
              <div 
                className={`flex items-center justify-between bg-green-500/10 rounded-lg p-2 transform transition-all duration-500 delay-500 ${
                  healthScore > 50 ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Leaf className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600 font-medium">Immune Support</span>
                </div>
                <span className="text-xs text-green-600 font-medium">High</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
              <AlertTriangle className="w-4 h-4 text-orange-500 mr-2" />
              Potential Risks
            </h4>
            <div className="space-y-2">
              <div 
                className={`flex items-center justify-between bg-orange-500/10 rounded-lg p-2 transform transition-all duration-500 delay-700 ${
                  healthScore > 70 ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Pill className="w-4 h-4 text-orange-500" />
                  <span className="text-sm text-gray-700">High Doses</span>
                </div>
                <span className="text-xs text-orange-500 font-medium">Low</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Quick Stats */}
        <div className="grid grid-cols-3 gap-3 text-center">
          {[
            { label: 'Ingredients', value: 'Clean', delay: 'delay-1000' },
            { label: 'Allergens', value: 'None', delay: 'delay-1100' },
            { label: 'Quality', value: 'Premium', delay: 'delay-1200', isSuccess: true }
          ].map((stat, index) => (
            <div 
              key={index}
              className={`bg-gray-50 rounded-lg p-2 transform transition-all duration-500 ${stat.delay} ${
                healthScore > 80 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
              <p className={`text-sm font-semibold ${
                stat.isSuccess ? 'text-green-600' : 'text-gray-700'
              }`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Analysis Cards with Animation */}
      <div 
        className={`absolute -top-4 -left-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20 transform transition-all duration-700 delay-1500 ${
          healthScore > 90 ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
        }`}
      >
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-600">FDA Approved</span>
        </div>
      </div>

      <div 
        className={`absolute -bottom-4 -right-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20 transform transition-all duration-700 delay-1700 ${
          healthScore > 85 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="flex items-center space-x-2">
          <AlertTriangle className="w-3 h-3 text-orange-500" />
          <span className="text-xs text-gray-600">Check Dosage</span>
        </div>
      </div>

      {/* Reset Button for Demo */}
      <button
        onClick={() => {
          setHealthScore(0);
          setIsAnimating(true);
          const duration = 2000;
          const steps = 60;
          const increment = targetScore / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const newScore = Math.min(Math.round(currentStep * increment), targetScore);
            setHealthScore(newScore);

            if (currentStep >= steps) {
              clearInterval(timer);
              setIsAnimating(false);
            }
          }, duration / steps);
        }}
        className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded-lg transition-colors duration-200"
      >
        Restart Animation
      </button>
    </div>
  );
};

export default HealthDashboardMockup;
