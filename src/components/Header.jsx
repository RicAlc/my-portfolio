import logo from "../assets/ricalc.png";
import { ImMenu } from "react-icons/im";
import { useState } from "react";

function Header() {
  const [menuToggle, setMenuToggle] = useState(true);
  const [aria_label, setAria_label] = useState("Abrir menú");
  const openMenu = () => {
    setMenuToggle(!menuToggle);
    window.scrollTo(0, 0);
    if (menuToggle) {
      document.body.style.overflow = "hidden";
      setAria_label("Cerrar menú");
    } else {
      document.body.style.overflow = "auto";
      setAria_label("Abrir menú");
    }
  };
  return (
    <header className='header'>
      <nav role='navigation'>
        <div className='logo'>
          <img src={logo} alt='Logo' className='logo__img' />
        </div>
        <ul className={`${menuToggle ? "nav-bar" : "nav-bar toggle"}`}>
          <li>
            <a className='nav-bar__link' href='#about_me'>
              SOBRE MI
            </a>
          </li>
          <li>
            <a className='nav-bar__link' href='#latest_work'>
              PROYECTOS
            </a>
          </li>
          <li>
            <a className='nav-bar__link' href='/'>
              BLOG
            </a>
          </li>
        </ul>
        <div
          className={`${menuToggle ? "contact" : "contact toggle"}`}
          onClick={() =>
            window.open("mailto:alcala.ricardoc@gmail.com", "_blank")
          }
        >
          CONTACTÁME
        </div>
        <div className='menu' aria-label={aria_label} role='navigation'>
          <ImMenu className='menu__icon' onClick={() => openMenu()} />
        </div>
      </nav>
    </header>
  );
}
export default Header;
