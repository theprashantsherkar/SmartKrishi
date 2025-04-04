import React from 'react'
import {Link} from 'react-router-dom'
import {ImagesSlider} from '@/components/ui/images-slider';

function Hero() {

const images = ['/image.jpg', 'scene1.webp', 'scene2.webp', 'scene3.webp'];

  return (
      <header className="flex-grow sm:flex-row flex-col flex items-center container mx-auto px-6 py-16 sm:h-[90vh] min-h-fit">
          <div className="sm:w-1/2 w-full h-fit px-5">
              <h2 className="sm:text-5xl text-3xl font-bold text-green-900 mb-6">
                  Precision Agriculture, Powered by Technology
              </h2>
              <p className="sm:text-xl text-md text-green-700 mb-8">
                  Optimize your farm's productivity with real-time insights, predictive analytics, and smart recommendations.
              </p>
              <div className="flex gap-4 "> 
                  <button className="bg-green-600 text-white px-3 py-3 rounded-lg hover:bg-green-700">
                      <Link to={'/signup'}>Start Free Trial</Link>
                  </button>
                  <button className="border-2 border-green-600 text-green-700 px-6 py-3 rounded-lg hover:bg-green-100">
                      <Link to={'/pricing'}>Pricing</Link>
                  </button>
              </div>
          </div>
          <div className="sm:w-1/2 w-full h-3/4 rounded-xl overflow-hidden">
              <ImagesSlider images={images}/>
          </div>
      </header>
  )
}

export default Hero