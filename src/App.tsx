import { useState } from 'react';
import BootSequence from './components/BootSequence';
import HudCursor from './components/HudCursor';
import NetworkBackground from './components/NetworkBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <>
      <HudCursor />
      
      {!bootComplete && <BootSequence onComplete={() => setBootComplete(true)} />}
      
      <div className={`relative min-h-screen transition-opacity duration-1000 ${bootComplete ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}>
        <NetworkBackground />
        
        {/* CRT Scanline Overlay */}
        <div className="fixed inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.15)_50%)] bg-[length:100%_4px] pointer-events-none z-40 mix-blend-multiply" style={{ opacity: 0.8 }}></div>
        <div className="fixed top-0 left-0 w-full h-[15vh] bg-gradient-to-b from-transparent via-cyan/10 to-transparent animate-scanline pointer-events-none z-40 mix-blend-screen opacity-50"></div>
        <div className="fixed inset-0 pointer-events-none z-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,7,10,0.4)_100%)]"></div>

        <div className="relative z-10 flex flex-col min-h-screen" id="top">
          <Header />
          <main className="flex-grow pt-24 md:pt-32">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Publications />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
