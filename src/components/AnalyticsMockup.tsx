const AnalyticsMockup = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <span className="font-medium text-gray-900">Overview</span>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">By Service</p>
          <p className="text-2xl font-bold text-gray-900">$2,259 <span className="text-sm text-gray-400 font-normal">ETH</span></p>
          <div className="flex items-center justify-end">
            <span className="bg-success/10 text-success px-2 py-1 rounded text-xs">+5%</span>
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="mb-4">
        <div className="flex items-end justify-center space-x-2 h-32">
          {/* Bar Chart */}
          <div className="flex items-end space-x-1">
            <div className="w-6 h-16 bg-gray-200 rounded-t"></div>
            <div className="w-6 h-20 bg-gray-300 rounded-t"></div>
            <div className="w-6 h-12 bg-primary/30 rounded-t"></div>
            <div className="w-6 h-24 bg-primary/50 rounded-t"></div>
            <div className="w-6 h-28 bg-primary rounded-t"></div>
            <div className="w-6 h-20 bg-primary/70 rounded-t"></div>
            <div className="w-6 h-16 bg-primary/40 rounded-t"></div>
          </div>
        </div>
        
        {/* Chart Labels */}
        <div className="flex justify-center space-x-4 mt-2 text-xs text-gray-500">
          <span>JAN</span>
          <span>FEB</span>
          <span>MAR</span>
          <span>APR</span>
          <span>MAY</span>
          <span>JUN</span>
          <span>JUL</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-500 mb-1">Total Revenue</p>
          <p className="text-lg font-bold text-gray-900">$24,580</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-500 mb-1">Growth Rate</p>
          <p className="text-lg font-bold text-success">+12.5%</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsMockup;