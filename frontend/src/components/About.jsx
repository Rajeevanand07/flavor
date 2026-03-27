import React from 'react'
import { Link } from 'react-router'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <svg 
              width="80" 
              height="80" 
              viewBox="0 0 40 40" 
              className="animate-pulse"
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
          <h1 className="text-5xl font-bold text-[#EC1B00] mb-4">About Flavor</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Your ultimate destination for discovering, creating, and sharing delicious recipes from around the world
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              We believe that cooking should be enjoyable, accessible, and inspiring. Flavor connects passionate home cooks with professional chefs, creating a vibrant community where recipes come to life and culinary traditions are celebrated.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Community</h2>
            <p className="text-gray-600 leading-relaxed">
              Join thousands of food enthusiasts who share their favorite recipes, cooking tips, and kitchen adventures. From quick weeknight dinners to elaborate holiday feasts, our community has something for every taste and skill level.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Makes Flavor Special</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#EC1B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy Recipe Creation</h3>
              <p className="text-gray-600">Share your recipes with our intuitive creation tools</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#EC1B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Made with Love</h3>
              <p className="text-gray-600">Every recipe is crafted with passion and care</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#EC1B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quick & Easy</h3>
              <p className="text-gray-600">Find recipes that fit your schedule and lifestyle</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-[#EC1B00] mb-2">1000+</div>
            <div className="text-gray-600">Recipes</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-[#EC1B00] mb-2">500+</div>
            <div className="text-gray-600">Chefs</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-[#EC1B00] mb-2">50+</div>
            <div className="text-gray-600">Cuisines</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-[#EC1B00] mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Cooking?</h2>
          <p className="text-xl mb-8 opacity-90">Join our community today and discover amazing recipes</p>
          <div className="flex gap-4 justify-center">
            <Link to="/">
              <button className="px-8 py-3 bg-white text-[#EC1B00] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Explore Recipes
              </button>
            </Link>
            <Link to="/create">
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#EC1B00] transition-all duration-300 transform hover:scale-105">
                Create Recipe
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About