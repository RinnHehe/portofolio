import React from 'react'
import { motion } from 'framer-motion'
import ProfileCard from './ProfileCard'
import profileImage from '../assets/profile-new.png'

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 flex justify-center"
    >
      {/* Neon Line Wrapper */}
      <div className="relative max-w-6xl w-full mx-auto px-6 py-16 rounded-2xl border border-[var(--accent)]">

        {/* Content Layer */}
        <div className="relative z-10 bg-black/80 rounded-2xl p-10 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get to know more about my journey and passion for web development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-4">My Story</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a web developer with a strong interest in PHP, JavaScript, and modern web frameworks like Laravel, CodeIgniter 4, and React. I enjoy turning ideas into functional systems, working with clean architecture, and building responsive interfaces.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I started my journey with a curiosity about how applications work behind the scenes, which grew into a passion for web development and cybersecurity. I love solving problems, learning new technologies, and continuously improving my skills.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My focus now is to deepen my backend development expertise and create meaningful projects that deliver real value to users.
              </p>
            </motion.div>

            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <ProfileCard
                avatarUrl={profileImage}
                miniAvatarUrl={profileImage}
                name="Muhammad Mashaan Navarin"
                title="Web Developer"
                handle="nvmnyeh"
                status="Online"
                contactText="Connect with Me" 
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={true}
                onContactClick={() => {
                  const contactSection = document.getElementById('contact')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
