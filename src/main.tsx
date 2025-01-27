import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.tsx'
import LandingScreen from './screens/LandingScreen.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingScreen />} />
      <Route path="/home" element={<App />} />
    </Routes>
  </BrowserRouter>,
)
