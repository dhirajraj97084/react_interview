import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'




createRoot(document.getElementById('root')).render(


  <StrictMode>
    <App/>
    <Toaster
      toastOptions={{
        duration: 4000,
        style: {
          background: '#333',
          color: '#fff',
        },
      }} />
  </StrictMode>,
)
