import NAVLINKS from "./config";
import Logo from "../../assets/falkie-bjj-logo-transparent-background.png";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar-LogoContainer">
        <img className="Navbar-LogoImage" src={Logo} alt="Falkie BJJ Logo" />
        <p className="Navbar-LogoCaption">FALKIE BJJ</p>
      </div>
      <div className="Navbar-LinksContainer">
        <ul className="Navbar-LinksList">
          {NAVLINKS.map(({ name, link }, index) => (
            <li className="Navbar-LinkItem" key={index}>
              <a className="Navbar-Link" href={link}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
