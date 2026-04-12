import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { Mail } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span className="footer-name">Yashpal Yadav</span>
          <span className="footer-copy">
            © {new Date().getFullYear()} — Built with React &amp; Framer Motion
          </span>
          <div className="footer-links">
            <a
              href="https://github.com/Yashpal-0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/yashpal-yadav-990278221"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
            <a href="mailto:yashpalyadav050@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
