const Sidebar = () => {
    return(
      <div className="bg-white border-r border-gray-300 shadow-lg h-full p-4"> 
        <h2 className="text-lg font-medium text-gray-700 mb-6">Navigation</h2>
        <nav className="space-y-2">
          {['Dashboard', 'Analytics', 'Users', 'Settings'].map((item) => (
            <a 
              key={item}
              href="#" 
              className="block p-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    )
  }

export default Sidebar;