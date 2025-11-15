import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram, FaDiscord, FaSpotify } from 'react-icons/fa'

export default function Contacts(){
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'mashaannavarin@gmail.com',
      color: 'text-red-400'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+62 878-1848-9300',
      color: 'text-green-400',
      url: 'https://wa.me/6287818489300'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Banjarmasin, Indonesia',
      color: 'text-blue-400',
      url: 'https://www.google.com/maps/search/?api=1&query=Banjarmasin,+Kalimantan+Selatan,+Indonesia'
    }
  ]

  const socialLinks = [
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/RinnHehe',
      color: 'text-gray-400 hover:text-white'
    },
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/muhammad-mashaan-navarin-5ba879366/',
      color: 'text-gray-400 hover:text-blue-400'
    },
    {
      icon: FaInstagram,
      name: 'Instagram',
      url: 'https://instagram.com/nvmnyeh',
      color: 'text-gray-400 hover:text-pink-400'
    },
    {
      icon: FaDiscord,
      name: 'Discord',
      url: 'https://discord.gg/vxghnMzeRA',
      color: 'text-gray-400 hover:text-indigo-400'
    },
    {
      icon: FaSpotify,
      name: 'Spotify',
      url: 'https://open.spotify.com/user/zok069mkireypuhzkk63q4zri?si=edbde3fe54044aa8',
      color: 'text-gray-400 hover:text-green-400'
    }
  ]

  const renderContactItem = (contact, index) => {
    const content = (
      <>
        <div className={`p-4 rounded-lg bg-black border border-white/10 group-hover:border-[var(--accent)] transition-colors duration-300 ${contact.color} mb-4`}>
          <contact.icon className="w-8 h-8" />
        </div>
        <h4 className="font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 mb-2">
          {contact.title}
        </h4>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm">
          {contact.value}
        </p>
      </>
    );

    if (contact.url) {
      return (
        <motion.a
          key={contact.title}
          href={contact.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center text-center p-6 bg-black rounded-xl border border-white/10 ring-1 ring-white/10 hover:border-[var(--accent)] hover:ring-[var(--accent)] transition-all duration-300 group no-underline"
        >
          {content}
        </motion.a>
      );
    } else {
      return (
        <motion.div
          key={contact.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center text-center p-6 bg-black rounded-xl border border-white/10 ring-1 ring-white/10 hover:border-[var(--accent)] hover:ring-[var(--accent)] transition-all duration-300 group"
        >
          {content}
        </motion.div>
      );
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to work together? Let's discuss your next project and bring your ideas to life.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactInfo.map((contact, index) => renderContactItem(contact, index))}
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-6">Connection with Me</h4>
              <div className="flex justify-center flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 bg-black rounded-xl border border-white/10 ring-1 ring-white/10 hover:border-[var(--accent)] hover:ring-[var(--accent)] transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-8 h-8" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
