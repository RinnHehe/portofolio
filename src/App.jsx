import React from 'react';
import GooeyNav from './components/GooeyNav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Particles from './components/Particles';

export default function App() {
  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href, index) => {
    const section = document.querySelector(href);
    if (section) {
      // Calculate slide distance based on index
      // Home (0) slides up (-60px), others slide down progressively (30px, 60px, 90px, 120px)
      const slideDistance = index === 0 ? -60 : index * 30;
      
      // Apply slide effect to the main content
      const mainContent = document.querySelector('main');
      if (mainContent) {
        // First, slide in the direction
        mainContent.style.transform = `translateY(${slideDistance}px)`;
        
        // Then reset and scroll after a short delay
        setTimeout(() => {
          mainContent.style.transform = 'translateY(0)';
          section.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        // Fallback if main not found
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Particles Background */}
      <div className="fixed inset-0 z-0">
        <Particles
          particleCount={400}
          particleSpread={15}
          speed={0.15}
          particleColors={['#8a5bff', '#00c1ff', '#38bdf8']}
          moveParticlesOnHover={true}
          particleHoverFactor={2}
          alphaParticles={true}
          particleBaseSize={120}
          sizeRandomness={1}
          cameraDistance={20}
          disableRotation={false}
        />
        {/* Dark overlay untuk membuat background lebih gelap */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative z-10">
        {/* GooeyNav Header */}
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 md:py-6 bg-black/10">
          <div className="text-white font-semibold text-base md:text-lg">
          </div>
          <div className="flex items-center">
            <GooeyNav
              items={menuItems}
              animationTime={600}
              particleCount={15}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
              initialActiveIndex={0}
              onItemClick={handleNavClick}
            />
          </div>
        </header>
        <main className="pt-20 transition-transform duration-[600ms] ease-out">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contacts />
        </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
