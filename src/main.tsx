import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router'
import HomeScreen from './screens/HomeScreen.tsx'
import { AnimatePresence } from 'framer-motion'
import 'bootstrap/dist/css/bootstrap.min.css';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'   >
      <Routes location={location} key={location.pathname}>
        {/* <Route path="/" element={<LandingScreen />} /> */}
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </AnimatePresence>
  )
}

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AnimatedRoutes />
  </BrowserRouter>,
)
