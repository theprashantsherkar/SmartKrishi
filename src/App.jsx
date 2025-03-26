import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/custom/Dashboard'
import Login from './pages/Login';
import Signin from './pages/Signin';
import Landing from './pages/Landing';
import { Toaster } from 'react-hot-toast';
import Values from './pages/Values';

function App() {
  return (
    <Router>

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signin />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/realtime' element={ <Values/>} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App;