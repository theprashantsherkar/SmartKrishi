import Navbar from '@/components/custom/Navbar';
import { Sprout } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom'


function Application() {

    const navigate = useNavigate();

    return (
        <>
            <div className='absolute w-full'>
                <nav className="bg-white shadow-md px-6 py-6 flex justify-between items-center">
                    <div className="flex items-center">
                        <Sprout className="text-green-600 mr-2" size={32} />
                        <h1 className="text-2xl font-bold text-green-800">SmartKrishi</h1>
                        <h1></h1>
                    </div>
                    <div className="space-x-4 flex items-center">
                        <a href="#features" className="text-green-700 hover:text-green-900">Features</a>
                        <a href="#how-it-works" className="text-green-700 hover:text-green-900">How It Works</a>
                        <h1 className=''>Welcome back, Prashant</h1>
                    </div>
                </nav>
            </div>
            <div className=' h-screen flex items-center justify-center gap-3 '>
                <div onClick={() => navigate('/dashboard')} className='hover:cursor-pointer border border-gray-300 p-3 rounded-md text-2xl font-semibold shadow-lg hover:shadow-gray-500 transition-all'>
                    <h1>Dashboard</h1>
                </div>
                <div onClick={() => navigate('/realtime')} className='hover:cursor-pointer border border-gray-300 p-3 rounded-md text-2xl font-semibold shadow-lg hover:shadow-gray-500 transition-all'>
                    <h1>Realtime data</h1>
                </div>
            </div>
        </>
  )
}

export default Application