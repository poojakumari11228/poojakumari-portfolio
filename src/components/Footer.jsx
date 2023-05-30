import '../styles';
import {github, twitter, linkedin, mail} from '../assets';
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-section">
          <a href="mailto:pooja.kumari48@outlook.com">
              <img
                  src={mail}
                  alt="Email"
                  width="50"
              />
          </a>
        <a href="https://twitter.com/PoojaKumari1122?s=20">
          <img
              src={twitter}
              alt="Twitter"
              width="50"          />
        </a>

        <a href="https://www.linkedin.com/in/poojakumari48/">
          <img
              src={linkedin}
              alt="LinkedIn"
              width="50"
          />
        </a>

        <a href="https://github.com/poojakumari11228/">
          <img
              src={github}
              alt="GitHub"
              width="50"
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
