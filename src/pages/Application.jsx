import Navbar from '@/components/custom/Navbar';
import { Input } from '@/components/ui/input';
import { Sprout } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { CropContext } from '@/context/CropContext';
import { Button } from '@/components/ui/Button';
import toast from 'react-hot-toast';


function Application() {

    const { crop, setCrop, city, setCity } = useContext(CropContext);
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

            <div className=' h-screen flex flex-col items-center justify-center gap-16 '>
                <div className='flex gap-3 flex-col items-center justify-center'>
                    <Input placeholder="Enter Crop name" value={crop} onChange={(e) => setCrop(e.target.value)} />
                    <Input placeholder="Enter City name" value={city} onChange={(e) => setCity(e.target.value)} />
                    <Button onClick={()=>toast.success("City and Crop saved")}>Save data</Button>
                </div>
                <div className='flex gap-3 items-center justify-center flex-wrap'>
                    <div onClick={() => navigate('/dashboard')} className='hover:cursor-pointer border border-gray-300 p-3 rounded-md text-2xl font-semibold shadow-lg hover:shadow-gray-500 transition-all'>
                        <h1>Dashboard</h1>
                    </div>
                    <div onClick={() => navigate('/realtime')} className='hover:cursor-pointer border border-gray-300 p-3 rounded-md text-2xl font-semibold shadow-lg hover:shadow-gray-500 transition-all'>
                        <h1>Realtime data</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Application