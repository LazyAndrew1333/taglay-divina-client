import '../style/Footer.css'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import youtube from '../assets/youtube.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-title">Follow me on</div>
      <div className="footer-socials">
        <img src={facebook} alt="facebook profile" />
        <img src={instagram} alt="instagram profile" />
        <img src={youtube} alt="youtube profile" />
      </div>
    </footer>
  )
}

export default Footer