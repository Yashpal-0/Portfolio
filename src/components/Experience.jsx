import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      company: "SKDIV® Industries Private Limited",
      position: "Frontend Engineer (Remote)",
      period: "Aug 2025 - Present",
      location: "Remote",
      description: "Leading frontend development for CREW platform, focusing on real-time communication features.",
      achievements: [
        "Architected and implemented the 'CREW Calling' feature using Flutter and Livekit SDK",
        "Delivered high-quality, real-time audio communication for both 1-on-1 and group calls",
        "Enhanced user experience with seamless integration of calling features"
      ],
      technologies: ["Flutter", "Livekit SDK", "Real-time Communication", "WebRTC"],
      link: "https://apps.apple.com/au/app/crew/id6739217561"
    },
    {
      company: "SKDIV® Industries Private Limited",
      position: "Frontend Developer Intern (Remote)",
      period: "May 2024 - Aug 2025",
      location: "Remote",
      description: "Developed core messaging functionality and real-time features for the CREW platform.",
      achievements: [
        "Engineered core real-time messaging frontend using Flutter with secure WebSocket connections",
        "Implemented robust offline capabilities using IndexedDB with Redis cache backend",
        "Enhanced user engagement with Firebase Cloud Messaging (FCM) integration",
        "Significantly improved application resilience and user experience"
      ],
      technologies: ["Flutter", "WebSocket", "IndexedDB", "Redis", "Firebase", "Real-time Messaging"],
      link: "https://apps.apple.com/au/app/crew/id6739217561"
    },
    {
      company: "Software Engineering Research Center",
      position: "Undergraduate Researcher",
      period: "May 2023 - July 2024",
      location: "IIIT Hyderabad",
      description: "Contributed to educational technology platform for interactive OS learning.",
      achievements: [
        "Developed 'Process Life Cycle', 'Context Switching', and 'Scheduling' experiments",
        "Achieved 20% increase in student engagement and understanding of OS concepts",
        "Integrated Express.js backend for enhanced data analysis capabilities",
        "Reduced data processing time by 15% through optimized backend operations"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Express.js", "Educational Technology"],
      link: "https://vlab-os.github.io/OS4all/"
    },
    {
      company: "HydrowVerse Pvt Ltd.",
      position: "Project Intern",
      period: "Jan 2023 - May 2023",
      location: "Hyderabad, Telangana",
      description: "Developed IoT-based water management application with real-time monitoring capabilities.",
      achievements: [
        "Engineered Hydrowverse app using Flutter with IoT device integration",
        "Integrated ThingSpeak API for real-time data fetching, improving accuracy by 30%",
        "Designed intuitive interface for live water level updates and usage tracking",
        "Implemented QR code scanning for seamless device-phone connectivity"
      ],
      technologies: ["Flutter", "IoT", "ThingSpeak API", "QR Code", "Real-time Data"],
      link: "https://play.google.com/store/apps/details?id=com.mycompany.hydrow"
    }
  ]

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

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="experience-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="experience-header" variants={itemVariants}>
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle">
              My professional journey in software development and research
            </p>
          </motion.div>

          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="experience-item"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="experience-card">
                  <div className="experience-header-card">
                    <div className="experience-title">
                      <h3>{exp.position}</h3>
                      <h4>{exp.company}</h4>
                    </div>
                    <div className="experience-meta">
                      <div className="meta-item">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="meta-item">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="experience-link"
                        >
                          <ExternalLink size={16} />
                          <span>View Project</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="experience-description">{exp.description}</p>

                  <div className="experience-achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="experience-technologies">
                    <h5>Technologies Used:</h5>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
