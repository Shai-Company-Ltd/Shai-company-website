import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import Applications from './pages/Applications';
import Investment from './pages/Investment';
import Web3 from './pages/Web3';
import Music from './pages/Music';
import IA from './pages/IA';
import NotFound from './pages/NotFound';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {/* GLOBAL BACKGROUND - Persists across all pages */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -2, opacity: 1 }}>
        <ShaderGradientCanvas
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        >
          <ShaderGradient
            control="query"
            urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.1&cAzimuthAngle=180&cDistance=3.9&cPolarAngle=115&cameraZoom=1&color1=%235606ff&color2=%23fe8989&color3=%23000000&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=60&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=-0.5&positionY=0.1&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=235&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.1&uFrequency=5.5&uSpeed=0.1&uStrength=2.4&uTime=0.2&wireframe=false"
          />
        </ShaderGradientCanvas>
      </div>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, background: 'radial-gradient(circle at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)', pointerEvents: 'none' }}></div>

      <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apps" element={<Applications />} />
            <Route path="/invest" element={<Investment />} />
            <Route path="/web3" element={<Web3 />} />
            <Route path="/music" element={<Music />} />
            <Route path="/ia" element={<IA />} />
            <Route path="/privacy" element={<Legal type="privacy" />} />
            <Route path="/cgu" element={<Legal type="cgu" />} />
            <Route path="/left-to-live/privacy" element={<Legal type="privacy" project="left-to-live" />} />
            <Route path="/left-to-live/cgu" element={<Legal type="cgu" project="left-to-live" />} />
            <Route path="/notianote/privacy" element={<Legal type="privacy" project="notianote" />} />
            <Route path="/notianote/cgu" element={<Legal type="cgu" project="notianote" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Footer />
      </div>
    </>
  )
}

export default App
