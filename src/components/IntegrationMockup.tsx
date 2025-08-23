const IntegrationMockup = () => {
  return (
    <div className="relative max-w-md mx-auto">
      {/* Main Integration Card */}
      <div className="bg-white rounded-2xl shadow-xl p-6">
        {/* Header */}
        <div className="flex items-center mb-6">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <span className="font-medium text-gray-900">Seamless Integration</span>
        </div>

        {/* Integration Points */}
        <div className="space-y-4">
          {/* Integration Node 1 */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-feature-blue rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-sm font-medium text-gray-700">Banking API</span>
            </div>
            <div className="w-3 h-3 bg-success rounded-full"></div>
          </div>

          {/* Integration Node 2 */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-sm font-medium text-gray-700">Payment Gateway</span>
            </div>
            <div className="w-3 h-3 bg-success rounded-full"></div>
          </div>

          {/* Integration Node 3 */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-sm font-medium text-gray-700">Accounting Software</span>
            </div>
            <div className="w-3 h-3 bg-success rounded-full"></div>
          </div>
        </div>

        {/* Central Hub */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-2">
            <div className="w-8 h-8 bg-white rounded-full"></div>
          </div>
          <p className="text-sm text-gray-600">Central Hub</p>
        </div>
      </div>

      {/* Floating Connection Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 300 300">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M50 80 Q150 40 250 80"
            stroke="url(#connectionGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
          />
          <path
            d="M50 150 Q150 110 250 150"
            stroke="url(#connectionGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
          />
          <path
            d="M50 220 Q150 180 250 220"
            stroke="url(#connectionGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
          />
        </svg>
      </div>
    </div>
  );
};

export default IntegrationMockup;