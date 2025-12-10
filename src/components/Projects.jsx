import React, { useState, useEffect, useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import CardSwap, { Card } from './CardSwap'
import museumImage from '/src/assets/museumkayuhbaimbai.png'
import siakadImage from '/src/assets/siakad.png'

const projects = [
  { 
    id: 1, 
    title: 'Sistem Informasi Akademik Politeknik Kotabaru', 
    desc: 'A web-based academic information system designed to manage student data, course registration, lecturer schedules, and academic reports efficiently for Politeknik Kotabaru.',
    tech: ['React', 'Node.js', 'Laravel', 'MySQL'],
    
    image: siakadImage,
    link: 'https://siapoltekab.vps-poliban.my.id/'
  },
  { 
    id: 2, 
    title: 'Sistem Informasi Museum Kayuh Baimbai Kota Banjarmasin', 
    desc: 'An interactive digital platform showcasing the cultural heritage and collections of Museum Kayuh Baimbai, featuring virtual tours, historical archives, and museum management tools.',
    tech: ['CodeIgniter 4', 'Tailwind CSS', 'MySQL'],
    image: museumImage,
    link: 'https://mkb.vps-poliban.my.id'
  },
  { 
    id: 3, 
    title: 'Website Portfolio', 
    desc: 'A modern and responsive personal portfolio website to showcase projects, skills, and professional background — built with elegant animations and clean design.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    image: import.meta.env.BASE_URL + 'my-project.jpg',
    link: 'https://rinnportofolio.vercel.app/'
  }
]

export default function Projects(){
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];
  const [isAnimating, setIsAnimating] = useState(false); // optional throttle
  const sectionRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Animation variants (centralized for easier tuning)
  const containerVariants = {
    initial: { opacity: 0, y: 40 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    exit: { opacity: 0, y: -24, transition: { duration: 0.5, ease: 'easeInOut' } }
  };
  const titleVariants = {
    initial: { opacity: 0, y: 28 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.2 } }
  };
  const descVariants = {
    initial: { opacity: 0, y: 24 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.35 } }
  };
  const metaVariants = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 0.6, delay: 0.15 } }
  };
  const tagsParentVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } }
  };
  const tagVariants = {
    hidden: { opacity: 0, y: 14, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-8 md:py-20 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Here are some of my featured projects that demonstrate my experience in building impactful and modern web applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 items-center min-h-fit lg:min-h-[600px]">
          {/* Left side - Content */}
          <div className="flex flex-col justify-center space-y-6 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              {hasEntered && (
                <motion.div
                  key={activeProject.id}
                  variants={containerVariants}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  className="space-y-4"
                >
                  <motion.div className="text-xs md:text-sm text-gray-400 font-medium" variants={metaVariants} initial="initial" animate="enter">
                    Project {activeIndex + 1} of {projects.length}
                  </motion.div>
                  <motion.h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" variants={titleVariants} initial="initial" animate="enter">
                    {activeProject.title}
                  </motion.h3>
                  <motion.p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed" variants={descVariants} initial="initial" animate="enter">
                    {activeProject.desc}
                  </motion.p>
                  <motion.div
                    className="flex flex-wrap gap-2 pt-4"
                    variants={tagsParentVariants}
                    initial="hidden"
                    animate="show"
                  >
                    {activeProject.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        variants={tagVariants}
                        className="px-3 md:px-4 py-1.5 md:py-2 bg-white/10 text-gray-300 text-xs md:text-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
              <a
                href={activeProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-[#8a5bff] to-[#00c1ff] text-white font-semibold text-sm md:text-base rounded-lg hover:from-[#7a4bef] hover:to-[#00b1ef] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30 text-center"
              >
                Preview Project
              </a>
              <button
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setActiveIndex((prev) => (prev + 1) % projects.length);
                  setTimeout(() => setIsAnimating(false), 900); // match animation duration
                }}
                disabled={isAnimating}
                className={`px-4 md:px-6 py-2.5 md:py-3 bg-white/10 text-white font-semibold text-sm md:text-base rounded-lg border border-white/20 transition-all duration-300 ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'}`}
              >Next Project</button>
            </div>
          </div>

          {/* Right side - Media */}
          <div className="relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-start md:items-center justify-center lg:justify-end overflow-visible order-1 lg:order-2 w-full lg:w-auto pt-4 md:pt-0">
            {isMobile ? (
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } }}
                exit={{ opacity: 0, y: -20, scale: 0.98, transition: { duration: 0.35, ease: 'easeIn' } }}
                className="w-full flex justify-center"
              >
                <div className="relative w-[320px] sm:w-[360px] max-w-full h-[240px] sm:h-[260px] rounded-xl overflow-hidden border border-white/15 bg-white/5 shadow-xl shadow-purple-500/20">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const img = e.currentTarget;
                      const tried = img.getAttribute('data-fallback') || 'jpg';
                      if (tried === 'jpg') {
                        img.setAttribute('data-fallback', 'png');
                        img.src = import.meta.env.BASE_URL + 'my-project.png';
                      } else if (tried === 'png') {
                        img.setAttribute('data-fallback', 'webp');
                        img.src = import.meta.env.BASE_URL + 'my-project.webp';
                      } else {
                        img.onerror = null;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-white text-sm font-semibold line-clamp-2 drop-shadow">{activeProject.title}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {activeProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] bg-white/15 text-gray-100 rounded-full border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <CardSwap
                width={500}
                height={400}
                cardDistance={60}
                verticalDistance={70}
                activeIndex={activeIndex}
                skewAmount={6}
                easing="power1.out"
                onCardChange={() => { /* already handled by activeIndex */ }}
                onCardClick={(index) => {
                  setActiveIndex(index);
                  if (projects[index]?.link) {
                    window.open(projects[index].link, '_blank');
                  }
                }}
              >
                {projects.map((project) => (
                  <Card
                    key={project.id}
                    customClass="cursor-pointer overflow-hidden"
                    onClick={() => {
                      if (project.link) {
                        window.open(project.link, '_blank');
                      }
                    }}
                  >
                    <div className="w-full h-full flex flex-col bg-gradient-to-br from-gray-900 to-black">
                      <div className="relative h-32 md:h-40 lg:h-48 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            const img = e.currentTarget;
                            const tried = img.getAttribute('data-fallback') || 'jpg';
                            if (tried === 'jpg') {
                              img.setAttribute('data-fallback', 'png');
                              img.src = import.meta.env.BASE_URL + 'my-project.png';
                            } else if (tried === 'png') {
                              img.setAttribute('data-fallback', 'webp');
                              img.src = import.meta.env.BASE_URL + 'my-project.webp';
                            } else {
                              img.onerror = null;
                            }
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      </div>

                      <div className="flex-1 p-4 md:p-6 flex flex-col">
                        <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3 text-white line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed flex-1 line-clamp-3">
                          {project.desc}
                        </p>

                        <div className="flex flex-wrap gap-1.5 md:gap-2 mt-auto">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 md:px-3 py-0.5 md:py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
