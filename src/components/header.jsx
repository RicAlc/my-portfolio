import logo from "../assets/logo.png";
import { ImMenu } from "react-icons/im";
import { useState } from "react";

function Header() {
  const [menuToggle, setMenuToggle] = useState(true);
  const openMenu = () => {
    setMenuToggle(!menuToggle);
  };
  return (
    <header className='header'>
      <nav>
        <div className='logo'>
          <img src={logo} alt='Logo' className='logo__img' />
          RicAlc
        </div>
        <ul className={`${menuToggle ? "nav-bar" : "nav-bar toggle"}`}>
          <li>
            <a className='nav-bar__link' href=''>
              SOBRE MI
            </a>
          </li>
          <li>
            <a className='nav-bar__link' href=''>
              PROYECTOS
            </a>
          </li>
          <li>
            <a className='nav-bar__link' href=''>
              BLOG
            </a>
          </li>
        </ul>
        <div className={`${menuToggle ? "contact" : "contact toggle"}`}>
          CONTACTÁME
        </div>
        <div className='menu'>
          <ImMenu className='menu__icon' onClick={() => openMenu()} />
        </div>
      </nav>
    </header>
  );
}
export default Header;
