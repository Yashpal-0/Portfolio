import { motion } from 'framer-motion'
import { GraduationCap, Code, Lightbulb } from 'lucide-react'
import './About.css'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const education = [
    {
      degree: "B.Tech + MS (Research) in CSE",
      institution: "International Institute of Information Technology, Hyderabad",
      period: "2022-2026",
      location: "Hyderabad, Telangana"
    },
    {
      degree: "B.Sc (Hons.) in Physics",
      institution: "Banaras Hindu University",
      period: "2018-2021",
      location: "Varanasi, Uttar Pradesh"
    }
  ]

  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Experienced in building end-to-end applications using modern technologies like React, Flutter, Node.js, and MongoDB."
    },
    {
      icon: GraduationCap,
      title: "Research & Innovation",
      description: "Currently pursuing MS (Research) with focus on creating educational platforms and interactive learning experiences."
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Passionate about solving complex problems and creating solutions that make a real impact in people's lives."
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="about-header" variants={itemVariants}>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              A passionate developer with a strong foundation in computer science and physics
            </p>
          </motion.div>

          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              <h3>My Journey</h3>
              <p>
                I'm a Computer Science student at IIIT Hyderabad, currently pursuing a dual degree 
                (B.Tech + MS Research) program. My journey began with a strong foundation in Physics 
                from BHU, which gave me analytical thinking skills that I now apply to software development.
              </p>
              <p>
                As a Frontend Engineer at SKDIV Industries, I've been working on cutting-edge projects 
                including real-time communication platforms and IoT applications. I'm passionate about 
                creating user-friendly interfaces and solving complex technical challenges.
              </p>
              <p>
                My research interests lie in educational technology and interactive learning platforms, 
                where I've contributed to projects like OS4all - a web-based platform for learning 
                Operating System concepts through interactive labs.
              </p>
            </motion.div>

            <motion.div className="about-highlights" variants={itemVariants}>
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="highlight-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="highlight-icon">
                    <highlight.icon size={32} />
                  </div>
                  <h4>{highlight.title}</h4>
                  <p>{highlight.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div className="education-section" variants={itemVariants}>
            <h3>Education</h3>
            <div className="education-timeline">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="education-item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="education-content">
                    <h4>{edu.degree}</h4>
                    <p className="institution">{edu.institution}</p>
                    <div className="education-meta">
                      <span className="period">{edu.period}</span>
                      <span className="location">{edu.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
