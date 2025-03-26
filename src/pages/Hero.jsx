import React from 'react'

function Hero() {
  return (
      <header className="flex-grow flex items-center container mx-auto px-6 py-16">
          <div className="w-1/2">
              <h2 className="text-5xl font-bold text-green-900 mb-6">
                  Precision Agriculture, Powered by Technology
              </h2>
              <p className="text-xl text-green-700 mb-8">
                  Optimize your farm's productivity with real-time insights, predictive analytics, and smart recommendations.
              </p>
              <div className="flex space-x-4">
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
                      Start Free Trial
                  </button>
                  <button className="border-2 border-green-600 text-green-700 px-6 py-3 rounded-lg hover:bg-green-100">
                      Watch Demo
                  </button>
              </div>
          </div>
          <div className="w-1/2">
              <img
                  src="image.jpg"
                  alt="SmartKrishi Dashboard"
                  className="rounded-lg shadow-xl"
              />
          </div>
      </header>
  )
}

export default Hero