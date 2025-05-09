import { createRoot } from 'react-dom/client'
import { Route, Routes, useLocation, HashRouter } from 'react-router'
import HomeScreen from './anas/screens/HomeScreen.tsx'
import { AnimatePresence } from 'framer-motion'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ENV_NAME, FONT_FAMILY } from './config.ts'
import LandingScreen from './anas/screens/LandingScreen.tsx'
import LandingScreenAtul from './atul/screens/LandingScreenAtul.tsx'
import HomeScreenAtul from './atul/screens/HomeScreenAtul.tsx'

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
        <Route path="/home" element={<HomeScreenAtul />} />
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
      document.body.style.fontFamily = FONT_FAMILY
      return <AnimatedRoutesAnas />
    case 'zatul':
      document.body.style.fontFamily = FONT_FAMILY
      return <AnimatedRoutesZatul />
    default:
      return <AnimatedRoutesDefault />
  }
}

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <AnimatedRoutes />
  </HashRouter>,
)
