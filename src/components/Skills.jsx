import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Cpu, 
  GitBranch,
  Palette,
  Shield,
  Zap
} from 'lucide-react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "C/C++", level: 90 },
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Dart", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "SQL", level: 80 },
        { name: "R", level: 70 }
      ]
    },
    {
      title: "Frontend Technologies",
      icon: Globe,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Flutter", level: 85 },
        { name: "Bootstrap", level: 80 },
        { name: "Responsive Design", level: 95 },
        { name: "UI/UX Design", level: 85 }
      ]
    },
    {
      title: "Backend & Database",
      icon: Database,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "Firebase", level: 80 },
        { name: "RESTful APIs", level: 90 }
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "Flutter", level: 85 },
        { name: "Cross-platform", level: 90 },
        { name: "iOS Development", level: 75 },
        { name: "Android Development", level: 80 },
        { name: "App Store Deployment", level: 85 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Cpu,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Android Studio", level: 85 },
        { name: "Postman", level: 80 },
        { name: "Jupyter Notebook", level: 85 },
        { name: "Linux", level: 85 }
      ]
    },
    {
      title: "Specialized Skills",
      icon: Zap,
      skills: [
        { name: "Real-time Communication", level: 85 },
        { name: "IoT Integration", level: 80 },
        { name: "WebSocket", level: 85 },
        { name: "System Programming", level: 90 },
        { name: "Machine Learning", level: 75 },
        { name: "Educational Technology", level: 85 }
      ]
    }
  ]

  const softSkills = [
    { name: "Problem Solving", level: 95 },
    { name: "Leadership", level: 85 },
    { name: "Communication", level: 90 },
    { name: "Teamwork", level: 95 },
    { name: "Time Management", level: 90 },
    { name: "Adaptability", level: 95 },
    { name: "Critical Thinking", level: 90 },
    { name: "Attention to Detail", level: 95 }
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

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
        delay: 0.5
      }
    })
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="skills-header" variants={itemVariants}>
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-subtitle">
              A comprehensive overview of my technical and soft skills
            </p>
          </motion.div>

          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="skill-category"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="category-header">
                  <div className="category-icon">
                    <category.icon size={32} />
                  </div>
                  <h3>{category.title}</h3>
                </div>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          variants={skillBarVariants}
                          custom={skill.level}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="soft-skills-section" variants={itemVariants}>
            <h3>Soft Skills</h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="soft-skill-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="soft-skill-info">
                    <span className="soft-skill-name">{skill.name}</span>
                    <span className="soft-skill-level">{skill.level}%</span>
                  </div>
                  <div className="soft-skill-bar">
                    <motion.div
                      className="soft-skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="skills-summary" variants={itemVariants}>
            <div className="summary-card">
              <h4>Technical Summary</h4>
              <p>
                With expertise spanning full-stack development, mobile applications, and system programming, 
                I bring a comprehensive skill set to every project. My experience ranges from building 
                real-time communication platforms to developing educational technology solutions and IoT applications.
              </p>
              <div className="summary-highlights">
                <div className="highlight">
                  <strong>5+</strong> Programming Languages
                </div>
                <div className="highlight">
                  <strong>10+</strong> Frameworks & Technologies
                </div>
                <div className="highlight">
                  <strong>3+</strong> Years Experience
                </div>
                <div className="highlight">
                  <strong>15+</strong> Projects Completed
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
