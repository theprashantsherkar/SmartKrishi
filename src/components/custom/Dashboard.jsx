import { useState, useEffect } from 'react'

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import {
    Droplet,
    Thermometer,
    Sun,
    CloudRain,
    Leaf,
    Sprout
} from 'lucide-react';



function Dashboard() {

    const soilData = [
        { name: 'Jan', pH: 6.5, moisture: 32, temperature: 18, nitrogen: 45, phosphorus: 35 },
        { name: 'Feb', pH: 6.7, moisture: 28, temperature: 20, nitrogen: 50, phosphorus: 38 },
        { name: 'Mar', pH: 6.6, moisture: 35, temperature: 22, nitrogen: 55, phosphorus: 42 },
        { name: 'Apr', pH: 6.8, moisture: 40, temperature: 25, nitrogen: 60, phosphorus: 46 },
        { name: 'May', pH: 6.9, moisture: 45, temperature: 28, nitrogen: 65, phosphorus: 50 },
    ];

    const [selectedParameter, setSelectedParameter] = useState('moisture');

    const parameterConfig = {
        moisture: {
            icon: <Droplet className="text-blue-500" />,
            color: '#3B82F6',
            unit: '%'
        },
        temperature: {
            icon: <Thermometer className="text-red-500" />,
            color: '#EF4444',
            unit: '°C'
        },
        pH: {
            icon: <Leaf className="text-green-500" />,
            color: '#22C55E',
            unit: ''
        },
        nitrogen: {
            icon: <CloudRain className="text-purple-500" />,
            color: '#8B5CF6',
            unit: 'ppm'
        },
        phosphorus: {
            icon: <Sun className="text-yellow-500" />,
            color: '#EAB308',
            unit: 'ppm'
        }
    };


    return (


        <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
                <div className='flex items-end gap-4 '>
                    <h1 className='flex items-center gap-3 text-3xl font-bold '><Sprout className='scale-150 text-green-400' /> SmartKrishi</h1>
                    <h2 className="text-xl font-bold text-gray-800">Soil Parameters Analysis</h2>
                </div>
                <div className="space-x-2">
                    {Object.keys(parameterConfig).map(param => (
                        <button
                            key={param}
                            onClick={() => setSelectedParameter(param)}
                            className={`px-3 py-1 rounded ${selectedParameter === param
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 text-gray-700'
                                }`}
                        >
                            {param.charAt(0).toUpperCase() + param.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
                {Object.entries(parameterConfig).map(([param, config]) => (
                    <div
                        key={param}
                        className={`p-4 rounded-lg bg-${config.color.slice(1)}/10 border border-${config.color.slice(1)}/30`}
                    >
                        <div className="flex items-center mb-2">
                            {config.icon}
                            <span className="ml-2 font-semibold text-gray-700">
                                {param.charAt(0).toUpperCase() + param.slice(1)}
                            </span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">
                            {soilData[soilData.length - 1][param]}{config.unit}
                        </div>
                    </div>
                ))}
            </div>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={soilData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey={selectedParameter}
                        stroke={parameterConfig[selectedParameter].color}
                        strokeWidth={3}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>

    )
}

export default Dashboard;
