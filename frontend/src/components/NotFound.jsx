import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="text-9xl font-bold text-[#EC1B00] opacity-20 animate-pulse">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg 
                width="120" 
                height="120" 
                viewBox="0 0 40 40" 
                className="animate-bounce"
              >
                <circle cx="20" cy="20" r="18" fill="#EC1B00" opacity="0.1"/>
                <path 
                  d="M20 8 C12 8 8 12 8 20 C8 28 12 32 20 32 C28 32 32 28 32 20 C32 12 28 8 20 8 Z" 
                  fill="#EC1B00" 
                  opacity="0.8"
                />
                <path 
                  d="M15 15 L25 15 L25 25 L15 25 Z" 
                  fill="white"
                  opacity="0.9"
                />
                <circle cx="20" cy="20" r="3" fill="#EC1B00"/>
                <path 
                  d="M12 12 Q20 8 28 12" 
                  stroke="#EC1B00" 
                  strokeWidth="2" 
                  fill="none"
                  strokeLinecap="round"
                  className="animate-pulse"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Oops! Recipe Not Found
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
          Looks like this recipe got lost in the kitchen! Let's get you back to cooking up something delicious.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/">
            <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Go Home
            </button>
          </Link>
          <Link to="/create">
            <button className="px-8 py-3 bg-white text-[#EC1B00] border-2 border-[#EC1B00] font-semibold rounded-lg hover:bg-[#EC1B00] hover:text-white transition-all duration-300 transform hover:scale-105">
              Create Recipe
            </button>
          </Link>
        </div>

        {/* Fun Illustration */}
        <div className="relative">
          <div className="flex justify-center space-x-4">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '0s'}}>
              <svg className="w-8 h-8 text-[#EC1B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '0.2s'}}>
              <svg className="w-8 h-8 text-[#EC1B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">What were you looking for?</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/" className="group">
              <div className="p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors duration-300">
                <div className="text-[#EC1B00] font-semibold group-hover:underline">Browse Recipes</div>
                <div className="text-sm text-gray-600">Discover amazing dishes</div>
              </div>
            </Link>
            <Link to="/create" className="group">
              <div className="p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors duration-300">
                <div className="text-[#EC1B00] font-semibold group-hover:underline">Share Recipe</div>
                <div className="text-sm text-gray-600">Create your own dish</div>
              </div>
            </Link>
            <Link to="/about" className="group">
              <div className="p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors duration-300">
                <div className="text-[#EC1B00] font-semibold group-hover:underline">About Us</div>
                <div className="text-sm text-gray-600">Learn more about Flavor</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound