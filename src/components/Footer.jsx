import '../styles';
import {github, twitter, linkedin} from '../assets';
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-section">
        <a href="https://twitter.com/PoojaKumari1122?s=20">
          <img
              src={twitter}
              alt="Twitter"
              width="80"
              className="icons"
          />
        </a>

        <a href="https://www.linkedin.com/in/poojakumari48/">
          <img
              src={linkedin}
              alt="LinkedIn"
              width="50"
              className="icons"
          />
        </a>

        <a href="https://github.com/poojakumari11228/">
          <img
              src={github}
              alt="GitHub"
              width="40"
              className="icons"
          />
        </a>

      </div>
      <div className="copywrite-section">
        <p>© 2023. By Pooja Kumari.</p>
      </div>
    </div>
  )
}
export default Footer
