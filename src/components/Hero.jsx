import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Yashpal-0', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yashpal-yadav-990278221', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:yashpalyadav050@gmail.com', label: 'Email' }
  ]

  return (
    <section id="home" className="hero" role="banner" aria-label="Hero section">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h1 className="hero-title">
              Hi, I'm{' '}
              <motion.span
                className="hero-name"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
              >
                Yash
              </motion.span>
            </motion.h1>
            <motion.h2 className="hero-subtitle">
              Frontend Engineer & Full-Stack Developer
            </motion.h2>
            <motion.p className="hero-description">
              B.Tech + MS (Research) in CSE at IIIT Hyderabad. 
              Passionate about creating beautiful, functional web applications 
              and exploring the intersection of technology and user experience.
            </motion.p>
            
            <motion.div className="hero-buttons" variants={itemVariants}>
              <motion.a
                href="#projects"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            <motion.div className="hero-social" variants={itemVariants}>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={24} />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            variants={itemVariants}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className="hero-image">
              <div className="code-block">
                <div className="code-header">
                  <div className="code-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="code-title">yash.js</span>
                </div>
                <div className="code-content">
                  <div className="code-line">
                    <span className="keyword">const</span> developer = {'{'}
                  </div>
                  <div className="code-line indent">
                    <span className="property">name:</span> <span className="string">'Yashpal Yadav'</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="property">role:</span> <span className="string">'Frontend Engineer'</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="property">skills:</span> [<span className="string">'React'</span>, <span className="string">'Flutter'</span>, <span className="string">'Node.js'</span>],
                  </div>
                  <div className="code-line indent">
                    <span className="property">passion:</span> <span className="string">'Building amazing UIs'</span>
                  </div>
                  <div className="code-line">{'}'}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="scroll-arrow"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
