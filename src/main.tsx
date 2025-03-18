import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router'
import HomeScreen from './screens/HomeScreen.tsx'
import { AnimatePresence } from 'framer-motion'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ENV_NAME } from './config.ts'
import LandingScreen from './screens/LandingScreen.tsx'
import LandingScreenAtul from './screens/LandingScreenAtul.tsx'

const AnimatedRoutesAnas = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'   >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
    </AnimatePresence>
  )
}

const AnimatedRoutesZatul = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'   >
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<LandingScreenAtul />} />
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
    </AnimatePresence>
  )
}

const AnimatedRoutesDefault = () => {
  return (
    <h1>Please choose env</h1>
  )
}

const AnimatedRoutes = () => {
  switch (ENV_NAME) {
    case 'anas':
      return <AnimatedRoutesAnas />
    case 'zatul':
      return <AnimatedRoutesZatul />
    default:
      return <AnimatedRoutesDefault />
  }
}

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AnimatedRoutes />
  </BrowserRouter>,
)
