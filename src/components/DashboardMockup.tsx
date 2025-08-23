const DashboardMockup = () => {
  return (
    <div className="relative">
      {/* Main Dashboard Card */}
      <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-gray-500">Welcome Back!</p>
            <p className="text-xs text-gray-400">UI Portfolio</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900">$3,444</p>
            <div className="flex items-center text-success text-sm">
              <span className="bg-success/10 text-success px-2 py-1 rounded text-xs">+8%</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex text-sm mb-4 border-b">
          <button className="pb-2 px-1 text-gray-400">Daily</button>
          <button className="pb-2 px-3 text-gray-400">Weekly</button>
          <button className="pb-2 px-3 text-primary border-b-2 border-primary font-medium">Monthly</button>
          <button className="pb-2 px-3 text-gray-400">Yearly</button>
          <button className="pb-2 px-3 text-gray-400">Yearly</button>
        </div>

        {/* Transaction Items */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Banking</p>
                <p className="text-xs text-gray-500">$40,000</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">+$300</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-feature-blue rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Logistics</p>
                <p className="text-xs text-gray-500">$100</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">+$300</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Digitali</p>
                <p className="text-xs text-gray-500">$10,000</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">+$300</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-feature-blue rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Real estate move</p>
                <p className="text-xs text-gray-500">$5,000</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">+$400</p>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="border-t pt-4">
          <div className="flex items-center justify-between text-sm mb-3">
            <span className="text-gray-500">History</span>
            <span className="text-primary">See All</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-gray-600">Admin Fees</span>
              </div>
              <span className="text-gray-900">+$400</span>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-gray-600">Admin Fees</span>
              </div>
              <span className="text-gray-900">+$400</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;