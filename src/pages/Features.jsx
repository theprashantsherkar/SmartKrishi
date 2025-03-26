import React from 'react'

import {
    MapPin,
    Droplet,
    Leaf,
    Waves,
    Sprout,
    Satellite
} from 'lucide-react';

function Features() {
  return (
      <section id="features" className="bg-white py-16 min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-6">
              <h3 className="text-4xl font-bold text-center text-green-900 mb-12">
                  Smart Features for Modern Farming
              </h3>
              <div className="grid grid-cols-3 gap-8">
                  {[
                      {
                          icon: <Satellite className="text-green-600" size={48} />,
                          title: "Satellite Monitoring",
                          description: "Track crop health, soil moisture, and field conditions with precision satellite imagery."
                      },
                      {
                          icon: <Droplet className="text-blue-600" size={48} />,
                          title: "Water Management",
                          description: "Optimize irrigation schedules and water usage based on real-time environmental data."
                      },
                      {
                          icon: <Waves className="text-blue-500" size={48} />,
                          title: "Weather Predictions",
                          description: "Receive accurate micro-climate forecasts to plan your agricultural activities."
                      }
                  ].map((feature, index) => (
                      <div key={index} className="text-center p-6 bg-green-50 rounded-lg hover:shadow-md transition-all">
                          <div className="flex justify-center mb-4">{feature.icon}</div>
                          <h4 className="text-xl font-semibold text-green-800 mb-3">{feature.title}</h4>
                          <p className="text-green-700">{feature.description}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>
  )
}

export default Features