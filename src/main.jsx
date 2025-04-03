import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {CropProvider} from './context/CropContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CropProvider>
      <App />
    </CropProvider>
  </StrictMode>,
)
