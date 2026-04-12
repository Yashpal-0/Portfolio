import { motion } from 'framer-motion'
import { Code, Cpu, Brain, Layers } from 'lucide-react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "C/C++", "JavaScript", "TypeScript", "Dart", "Kotlin", "Swift", "SQL", "HTML/CSS"]
    },
    {
      title: "ML & AI",
      icon: Brain,
      skills: ["PyTorch", "HuggingFace Transformers", "GPT-3.5", "FlanT5", "Fine-tuning", "Prompt Engineering", "LLM Agents", "RAG", "NLP"]
    },
    {
      title: "Frameworks",
      icon: Layers,
      skills: ["Flutter", "React.js", "React Native", "Node.js", "Express.js", "Electron.js", "REST APIs"]
    },
    {
      title: "Tools & Infrastructure",
      icon: Cpu,
      skills: ["Git", "MongoDB", "Firebase", "Redis", "WebSockets", "Pandas", "NumPy", "Jupyter", "Linux", "Postman", "SQLite", "Docker"]
    }
  ]

  const stats = [
    { value: "9+", label: "Languages" },
    { value: "15+", label: "Frameworks & Tools" },
    { value: "3+", label: "Years Experience" },
    { value: "10+", label: "Projects Shipped" }
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
            <p className="section-subtitle">Technologies I work with</p>
          </motion.div>

          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="skill-category"
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="category-header">
                  <div className="category-icon">
                    <category.icon size={22} />
                  </div>
                  <h3>{category.title}</h3>
                </div>
                <div className="skill-chips">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="skill-chip"
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.04 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.06 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="skills-stats" variants={itemVariants}>
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="stat-card"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
