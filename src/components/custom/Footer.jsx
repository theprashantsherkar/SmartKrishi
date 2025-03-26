import React from 'react'

function Footer() {
  return (
      <footer className="bg-green-800 text-white py-8">
          <div className="container mx-auto px-6 flex justify-between items-center">
              <div>
                  <p>&copy; 2024 SmartKrishi. All Rights Reserved.</p>
              </div>
              <div className="space-x-4">
                  <a href="#" className="hover:text-green-200">Privacy Policy</a>
                  <a href="#" className="hover:text-green-200">Terms of Service</a>
                  <a href="#" className="hover:text-green-200">Contact</a>
              </div>
          </div>
      </footer>
  )
}

export default Footer