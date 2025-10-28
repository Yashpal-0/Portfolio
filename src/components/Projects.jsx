import { motion } from 'framer-motion'
import { Github, ExternalLink, Code, Database, Smartphone, Brain } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const projects = [
    // GitHub Projects
    {
      title: "Greddit",
      description: "A Reddit-like web application built with the MERN stack, featuring live chat functionality powered by MongoDB Cloud services.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "WebSocket"],
      category: "Full-Stack",
      icon: Code,
      features: [
        "User authentication and authorization",
        "Real-time chat functionality",
        "Post creation and voting system",
        "Comment threading",
        "Responsive design"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "ML Algorithms Implementation",
      description: "Implementation of various Machine Learning algorithms from scratch including PCA, K-means, GMM, and more.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      technologies: ["Python", "scikit-learn", "pandas", "numpy", "hmmlearn"],
      category: "Machine Learning",
      icon: Brain,
      features: [
        "PCA (Principal Component Analysis)",
        "K-means clustering",
        "GMM (Gaussian Mixture Models)",
        "Multinomial Logistic Regression",
        "Multi Layer Perceptron",
        "Decision Trees"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Clash of Clans Terminal Game",
      description: "A terminal-based game inspired by Clash of Clans, implemented using Python with OOP principles and comprehensive testing.",
      image: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?w=500&h=300&fit=crop",
      technologies: ["Python", "OOP", "unittest", "Terminal UI"],
      category: "Game Development",
      icon: Code,
      features: [
        "Multiple game levels",
        "Unique character abilities",
        "Building and troop management",
        "Comprehensive unit testing",
        "Object-oriented design"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Linux Terminal in C",
      description: "A fully functional Linux Terminal developed in C using kernel system calls exclusively for process management and execution.",
      image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=500&h=300&fit=crop",
      technologies: ["C", "Linux", "System Calls", "Process Management"],
      category: "Systems Programming",
      icon: Code,
      features: [
        "Command execution",
        "Process management (foreground/background)",
        "Process information retrieval",
        "Input/output redirection",
        "Process termination"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Scheduler for xv6 OS",
      description: "Developed multiple scheduling algorithms including FCFS, PBS, and MLFQ by modifying core OS modules with syscall tracing.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      technologies: ["C", "xv6 OS", "Kernel Development", "Scheduling Algorithms"],
      category: "Operating Systems",
      icon: Code,
      features: [
        "FCFS (First Come First Served)",
        "PBS (Priority Based Scheduling)",
        "MLFQ (Multi-Level Feedback Queue)",
        "Syscall tracing (strace)",
        "Dynamic priority management"
      ],
      github: "#",
      demo: "#"
    },
    /* {
      title: "HydrowVerse IoT App",
      description: "Flutter-based IoT application for water management with real-time monitoring and smart device integration.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop",
      technologies: ["Flutter", "IoT", "ThingSpeak API", "QR Code", "Real-time Data"],
      category: "Mobile Development",
      icon: Smartphone,
      features: [
        "Real-time water level monitoring",
        "QR code device pairing",
        "Usage tracking and analytics",
        "Push notifications",
        "Cross-platform compatibility"
      ],
      github: "#",
      demo: "https://play.google.com/store/apps/details?id=com.mycompany.hydrow"
    }, */
    {
      title: "HydrowVerse IoT App",
      description: "Flutter-based IoT application for water management with real-time monitoring and smart device integration using 'Starr' smart water level device.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop",
      technologies: ["Flutter", "Dart", "IoT", "ThingSpeak API", "QR Code", "Real-time Data"],
      category: "Mobile Development",
      icon: Smartphone,
      features: [
        "Live water level monitoring",
        "Daily usage tracking and analytics",
        "Potential wastage detection",
        "QR code device pairing",
        "Real-time notifications",
        "Cross-platform compatibility"
      ],
      github: "https://github.com/Yashpal-0/Hydrowverse-App",
      demo: "https://play.google.com/store/apps/details?id=com.mycompany.hydrow"
    },
    /* {
      title: "CShell - Custom Shell Implementation",
      description: "Implementation of shell commands as well as user-defined commands in C, providing a complete command-line interface experience.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      technologies: ["C", "Linux", "System Calls", "Shell Programming", "Process Management"],
      category: "Systems Programming",
      icon: Code,
      features: [
        "Built-in shell commands",
        "User-defined command support",
        "Process execution and management",
        "Command parsing and interpretation",
        "Error handling and validation"
      ],
      github: "https://github.com/Yashpal-0/CShell",
      demo: "#"
    }, */
    {
      title: "Syscall File Reverser",
      description: "Program that uses only system calls to reverse the content of a file having size greater than RAM size with progress tracking from 0 to 100%.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
      technologies: ["C", "System Calls", "File I/O", "Memory Management", "Progress Tracking"],
      category: "Systems Programming",
      icon: Code,
      features: [
        "Handles files larger than RAM",
        "Progress tracking (0-100%)",
        "Efficient memory usage",
        "System call optimization",
        "Large file processing"
      ],
      github: "https://github.com/Yashpal-0/Syscall",
      demo: "#"
    },
    {
      title: "LegoJail Database Management",
      description: "A comprehensive database management system for a Jail with staff, guards, cells, and facilities. Implemented with Python for functional dependencies and user interaction.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["Python", "Database Design", "SQL", "Functional Dependencies", "Data Modeling"],
      category: "Database Systems",
      icon: Database,
      features: [
        "Complete jail management system",
        "Staff and guard management",
        "Cell and facility tracking",
        "Functional dependency implementation",
        "User-interactive Python interface"
      ],
      github: "https://github.com/Yashpal-0/LegoJail",
      demo: "#"
    },
    {
      title: "Cellular Automaton Simulation",
      description: "Conway's Game of Life simulation with pattern recognition, rule generation, and initial state prediction for given grid patterns.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop",
      technologies: ["Python", "Cellular Automata", "Game Theory", "Pattern Recognition", "Simulation"],
      category: "Algorithms & Theory",
      icon: Brain,
      features: [
        "Conway's Game of Life implementation",
        "Pattern recognition algorithms",
        "Rule generation from patterns",
        "Initial state prediction",
        "Grid-based simulation"
      ],
      github: "https://github.com/Yashpal-0/Cellular-Automaton-Simulation",
      demo: "#"
    },
    {
      title: "RPS Beat the DFA",
      description: "Rock, Paper, Scissors game with deterministic finite automaton that produces a DFA to beat every opponent move for given state constraints.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=300&fit=crop",
      technologies: ["Perl", "DFA", "Game Theory", "Automaton Theory", "Algorithm Design"],
      category: "Algorithms & Theory",
      icon: Brain,
      features: [
        "DFA-based game strategy",
        "State optimization (≤30 to ≤1000)",
        "Opponent move prediction",
        "Automaton theory implementation",
        "Strategic game playing"
      ],
      github: "https://github.com/Yashpal-0/RPS-Beat-the-DFA",
      demo: "#"
    },
    // Original Portfolio Projects
    
  ]

  const categories = ["All", "Mobile Development", "Systems Programming", "Database Systems", "Algorithms & Theory", "Full-Stack", "Machine Learning", "Game Development", "Operating Systems"]

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
              A showcase of my work across different domains and technologies
            </p>
          </motion.div>

          <motion.div className="projects-grid" variants={containerVariants}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <span className="project-category">{project.category}</span>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-features">
                    <h5>Key Features:</h5>
                    <ul>
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
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
