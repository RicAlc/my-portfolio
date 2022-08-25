import logo from '../assets/ricalc.png';
import { ImMenu } from 'react-icons/im';
import { useState } from 'react';

function Header() {
  const [menuToggle, setMenuToggle] = useState(true);
  const [aria_label, setAria_label] = useState('Abrir menú');

  const closeMenu = () => {
    setMenuToggle(true);
    document.body.style.overflow = 'auto';
  };
  const openMenu = () => {
    setMenuToggle(!menuToggle);
    if (menuToggle) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingTop = '60px';
      setAria_label('Cerrar menú');
    } else {
      document.body.style.paddingTop = 'unset';
      document.body.style.overflow = 'auto';
      setAria_label('Abrir menú');
    }
  };
  return (
    <header className={`${menuToggle ? 'header' : 'header fixed'}`}>
      <nav role='navigation'>
        <div
          className='logo'
          onClick={() => window.open('https://ricalc.netlify.app/', '_self')}
        >
          <img src={logo} alt='Logo' className='logo__img' />
        </div>
        <ul className={`${menuToggle ? 'nav-bar' : 'nav-bar toggle'}`}>
          <li>
            <a
              className='nav-bar__link'
              href='https://ricalc.netlify.app/#about_me'
              onClick={closeMenu}
            >
              SOBRE MI
            </a>
          </li>
          <li>
            <a
              className='nav-bar__link'
              href='https://ricalc.netlify.app/#latestWork'
              onClick={closeMenu}
            >
              PROYECTOS
            </a>
          </li>
          <li>
            <a className='nav-bar__link' href='/' onClick={closeMenu}>
              BLOG
            </a>
          </li>
        </ul>
        <div
          className='contact'
          onClick={() =>
            window.open('mailto:alcala.ricardoc@gmail.com', '_blank')
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
