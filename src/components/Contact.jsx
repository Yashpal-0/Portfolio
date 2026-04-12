import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Download, ArrowRight } from 'lucide-react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import './Contact.css'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      primary: "yashpalyadav050@gmail.com",
      secondary: "yashpal.yadav@research.iiit.ac.in",
      action: "mailto:yashpalyadav050@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      primary: "+91 97927 44442",
      secondary: null,
      action: "tel:+919792744442"
    },
    {
      icon: MapPin,
      title: "Location",
      primary: "IIIT Hyderabad",
      secondary: "Telangana, India",
      action: null
    }
  ]

  const socialLinks = [
    { icon: FiGithub, label: "GitHub", url: "https://github.com/Yashpal-0" },
    { icon: FiLinkedin, label: "LinkedIn", url: "https://linkedin.com/in/yashpal-yadav-990278221" },
    { icon: Mail, label: "Email", url: "mailto:yashpalyadav050@gmail.com" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="contact-header" variants={itemVariants}>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Open to opportunities, research collaborations, and interesting conversations.
            </p>
          </motion.div>

          <motion.div className="availability-wrap" variants={itemVariants}>
            <div className="availability-badge">
              <span className="avail-dot"></span>
              Available for internships &amp; full-time roles
            </div>
          </motion.div>

          <motion.div className="contact-cards" variants={containerVariants}>
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact-card"
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
              >
                {info.action ? (
                  <a href={info.action} className="contact-card-inner">
                    <div className="contact-card-icon">
                      <info.icon size={20} />
                    </div>
                    <div className="contact-card-text">
                      <span className="contact-card-title">{info.title}</span>
                      <span className="contact-card-primary">{info.primary}</span>
                      {info.secondary && (
                        <span className="contact-card-secondary">{info.secondary}</span>
                      )}
                    </div>
                    <ArrowRight size={15} className="contact-card-arrow" />
                  </a>
                ) : (
                  <div className="contact-card-inner">
                    <div className="contact-card-icon">
                      <info.icon size={20} />
                    </div>
                    <div className="contact-card-text">
                      <span className="contact-card-title">{info.title}</span>
                      <span className="contact-card-primary">{info.primary}</span>
                      {info.secondary && (
                        <span className="contact-card-secondary">{info.secondary}</span>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="contact-social" variants={itemVariants}>
            <div className="social-row">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.07, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                  <span>{social.label}</span>
                </motion.a>
              ))}
            </div>

            <motion.a
              href="Resume_Yashpal_IIITHyderabad.pdf"
              download
              className="download-resume"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
