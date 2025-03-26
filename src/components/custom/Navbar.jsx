import { Sprout } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
      <nav className="bg-white shadow-md px-6 py-6 flex justify-between items-center">
          <div className="flex items-center">
              <Sprout className="text-green-600 mr-2" size={32} />
              <h1 className="text-2xl font-bold text-green-800">SmartKrishi</h1>
          </div>
          <div className="space-x-4">
              <a href="#features" className="text-green-700 hover:text-green-900">Features</a>
              <a href="#how-it-works" className="text-green-700 hover:text-green-900">How It Works</a>
              <Link to={'/login'} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                  Login
              </Link>
              <Link to={'/signup'} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                  Get Started
              </Link>
          </div>
      </nav>
  )
}

export default Navbar