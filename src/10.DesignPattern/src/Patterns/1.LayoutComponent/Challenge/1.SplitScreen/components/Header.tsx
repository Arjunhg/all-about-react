
const Header = () => {
  return (
    <header className="bg-gray-300 shadow-sm p-4 border-b border-gray-100"> {/* Clean white header */}
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Profile
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;