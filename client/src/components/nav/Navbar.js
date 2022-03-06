import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
              <span className="font-semibold text-xl tracking-tight">PM App</span>
          </div>
          <div className="block lg:hidden">
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                  <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-300 mr-4">
                      Home
                  </Link>
              </div>
          </div>
      </nav>
  )
}

export default Navbar