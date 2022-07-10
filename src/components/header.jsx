import logo from "../assets/logo.png";
function Header() {
  return (
    <header className='header'>
      <nav>
        <div className='logo'>
          <img src={logo} alt='Logo' className='logo__img' />
          RicAlc
        </div>
        <ul className='nav-bar'>
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
        <div className='contact'>CONTACTÁME</div>
        <div className='menu'>-_-_-</div>
      </nav>
    </header>
  );
}
export default Header;
