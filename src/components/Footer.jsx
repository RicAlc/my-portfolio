import { FaGithubAlt, FaTwitter, FaInstagram } from "react-icons/fa";
function Footer() {
  const github_link = "https://github.com/RicAlc";
  const twitter_link = "https://twitter.com/_RicAlc";
  const ig_link = "https://www.instagram.com/_ricalc/";
  return (
    <footer className='footer'>
      <div className='footer-links content'>
        <div className='personal'>Ricardo Alcalá</div>
        <div className='footer__list menu'>
          <h3 className='footer__list__title menu'>Menú</h3>
          <ul>
            <li>Acerca de</li>
            <li>Servicios</li>
            <li>Blog</li>
            <li>Contáctame</li>
          </ul>
        </div>
        <div className='footer__list services'>
          <h3 className='footer__list__title services'>Servicios</h3>
          <ul>
            <li>Frontend</li>
            <li>Backend</li>
            <li>Full stack</li>
          </ul>
        </div>
        <div className='footer__socialmedia'>
          <ul>
            <li
              className='footer__socialmedia__item'
              onClick={() => window.open(github_link, "_blank")}
            >
              <FaGithubAlt className='icon' />
            </li>
            <li
              className='footer__socialmedia__item'
              onClick={() => window.open(twitter_link, "_blank")}
            >
              <FaTwitter className='icon' />
            </li>
            <li
              className='footer__socialmedia__item'
              onClick={() => window.open(ig_link, "_blank")}
            >
              <FaInstagram className='icon' />
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className='footer__policy content'>
        <div className='footer__copyright'>
          Copyright © 2022 RicAlc. All Rights Reserved.
        </div>
        <div className='footer__terms'>Términos de uso</div>
        <div className='footer__privacy-policy'>Aviso de privacidad</div>
      </div>
    </footer>
  );
}
export default Footer;
