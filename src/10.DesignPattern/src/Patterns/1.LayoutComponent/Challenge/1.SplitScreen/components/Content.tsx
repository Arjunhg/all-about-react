
const Content = () => {
    return(
      <div className="flex-1"> {/* Added padding */}
        <div className="mx-auto">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Total Users</h3>
              <p className="text-4xl font-bold text-blue-600">1,234</p>
              <div className="mt-4 text-sm text-green-600 flex items-center">
                <span>▲ 12%</span>
                <span className="ml-2 text-gray-500">vs last month</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Revenue</h3>
              <p className="text-4xl font-bold text-purple-600">$23,456</p>
              <div className="mt-4 text-sm text-red-600 flex items-center">
                <span>▼ 3%</span>
                <span className="ml-2 text-gray-500">vs last quarter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default Content;