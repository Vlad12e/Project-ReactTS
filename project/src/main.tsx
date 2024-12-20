import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import App1 from './components/ForSlider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <App1 />
  </StrictMode>,
)
