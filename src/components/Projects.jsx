import { motion } from 'framer-motion'
import { ExternalLink, Code, Smartphone, Brain, Terminal, Cpu, FileText } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "The Compliance Clerk",
      subtitle: "Intelligent Document Extraction",
      description: "4-stage fault-tolerant pipeline to automate structured data extraction from bilingual (English/Gujarati) Indian government PDFs — eChallan, NA Orders, and Lease Deeds — eliminating manual parsing workflows.",
      technologies: ["Python", "LLM Agents", "OpenAI API", "SQLite", "pdfplumber", "Tesseract OCR"],
      category: "AI / LLM Pipeline",
      icon: FileText,
      gradient: "cyan",
      featured: true,
      highlights: [
        "Schema-valid JSON output via autonomous LLM tool-calling, eliminating hallucinated fields",
        "Dual-tier OCR: pdfplumber + pytesseract fallback for digital and scanned PDFs",
        "Handles bilingual English/Gujarati government documents at production scale"
      ],
      github: "https://github.com/Yashpal-0/The-Compliance-Clerk",
      demo: null
    },
    {
      title: "Greddit",
      subtitle: "Reddit-like Social Platform",
      description: "Full-stack Reddit-like web app with the MERN stack featuring real-time chat, sub-community management, and user moderation powered by MongoDB Atlas.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "WebSocket"],
      category: "Full-Stack",
      icon: Code,
      gradient: "violet",
      featured: false,
      highlights: [],
      github: "https://github.com/Yashpal-0/Greddit",
      demo: null
    },
    {
      title: "ML Algorithms from Scratch",
      subtitle: "Core ML Implementations",
      description: "Reproduced 6 core ML algorithms from scratch — PCA, K-means, GMM, Multinomial Logistic Regression, Multi-Layer Perceptron, and Decision Trees — validated against scikit-learn baselines.",
      technologies: ["Python", "scikit-learn", "Pandas", "NumPy", "hmmlearn"],
      category: "Machine Learning",
      icon: Brain,
      gradient: "cyan",
      featured: false,
      highlights: [],
      github: "https://github.com/Yashpal-0/ML-Algorithms",
      demo: null
    },
    {
      title: "CShell",
      subtitle: "Custom Linux Terminal",
      description: "Custom Linux shell in C using kernel system calls, supporting command execution, foreground/background process management, I/O redirection, and signal handling.",
      technologies: ["C", "Linux", "System Calls", "Process Management"],
      category: "Systems",
      icon: Terminal,
      gradient: "violet",
      featured: false,
      highlights: [],
      github: "https://github.com/Yashpal-0/CShell",
      demo: null
    },
    {
      title: "xv6 Process Scheduler",
      subtitle: "Kernel-Level Scheduling",
      description: "Extended core xv6 kernel modules to support strace, FCFS, PBS, and MLFQ schedulers with dynamic priority and creation-time tracking.",
      technologies: ["C", "xv6", "Kernel Programming", "System Calls"],
      category: "OS / Kernel",
      icon: Cpu,
      gradient: "cyan",
      featured: false,
      highlights: [],
      github: "https://github.com/Yashpal-0/xv6-scheduling",
      demo: null
    },
    {
      title: "HydrowVerse IoT App",
      subtitle: "Smart Water Management",
      description: "Flutter app for the Starr smart water level device — real-time monitoring, daily usage tracking, and wastage detection for 200+ households via ThingSpeak API and QR pairing.",
      technologies: ["Flutter", "Dart", "ThingSpeak API", "IoT", "QR Code"],
      category: "Mobile",
      icon: Smartphone,
      gradient: "violet",
      featured: false,
      highlights: [],
      github: "https://github.com/Yashpal-0/Hydrowverse-App",
      demo: "https://play.google.com/store/apps/details?id=com.mycompany.hydrow"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  const featured = projects.find(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="projects-header" variants={itemVariants}>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              A selection of work across AI, systems, and full-stack
            </p>
          </motion.div>

          {/* Featured Project */}
          <motion.div
            className="project-card featured"
            variants={itemVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`project-visual grad-${featured.gradient}`}>
              <div className="project-icon-wrap">
                <featured.icon size={40} />
              </div>
              <span className="featured-badge">Featured</span>
              <span className="project-category-badge">{featured.category}</span>
            </div>
            <div className="project-body featured-body">
              <div className="project-main">
                <h3>{featured.title}</h3>
                <p className="project-sub">{featured.subtitle}</p>
                <p className="project-description">{featured.description}</p>
                <ul className="project-highlights">
                  {featured.highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              </div>
              <div className="project-footer">
                <div className="project-technologies">
                  {featured.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {featured.github && (
                    <a href={featured.github} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                      <FiGithub size={16} /> GitHub
                    </a>
                  )}
                  {featured.demo && (
                    <a href={featured.demo} target="_blank" rel="noopener noreferrer" className="project-link-btn demo">
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Grid Projects */}
          <motion.div className="projects-grid" variants={containerVariants}>
            {rest.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`project-visual grad-${project.gradient}`}>
                  <div className="project-icon-wrap">
                    <project.icon size={30} />
                  </div>
                  <span className="project-category-badge">{project.category}</span>
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p className="project-sub">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-footer">
                    <div className="project-technologies">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                          <FiGithub size={15} /> GitHub
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link-btn demo">
                          <ExternalLink size={15} /> Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
