import React from 'react'
import { motion } from 'framer-motion'
import Orb from './Orb'

// Custom SplitText component using framer-motion
const SplitText = ({ text, className, delay = 0, stagger = 0.05, animation = "fadeInUp" }) => {
  const words = text.split(' ')
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: delay }
    })
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 20
    }
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default function Hero(){
  return (
    <section id="home" className="relative text-center min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Orb background */}
      <Orb hoverIntensity={2} />
      <div className="relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <SplitText
          text="Hi, I'm Muhammad Mashaan Navarin"
          className="text-4xl md:text-6xl font-bold mb-4"
          delay={0.1}
          stagger={0.05}
          animation="fadeInUp"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mb-8"
      >
        <SplitText
          text="Transforming ideas into functional web experiences with precision, creativity, and continuous learning."
          className="text-lg text-gray-300 max-w-2xl mx-auto"
          delay={0.1}
          stagger={0.02}
          animation="fadeInUp"
        />
      </motion.div>
      </div>
    </section>
  )
}
