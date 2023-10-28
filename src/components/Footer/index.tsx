import imgArrowLeft from "../../assets/images/imgArrowLeft.png"
import imgArrowRight from "../../assets/images/imgArrowRight.png"

import "./style.css"

export function Footer() {
  return ( 
  <footer className="footer">
    <button className="button-arrow"><img src={imgArrowLeft} className="arrow"/></button>
    <a target="_blank" rel="noopener" href="https://Facebook.com" className="socialmedias">Facebook</a>
    <a target="_blank" rel="noopener" href="https://Instagram.com" className="socialmedias">Instagram</a>
    <a target="_blank" rel="noopener" href="https://Twitter.com" className="socialmedias">Twitter</a>
    <button className="button-arrow"><img src={imgArrowRight} className="arrow"/></button>
  </footer>
  )
}
