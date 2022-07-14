import MailMeForm from "./MailMeForm";
import phone_icon from "../assets/phone-icon.png";
import mail_icon from "../assets/mail-icon.png";
import address_icon from "../assets/address-icon.png";
function ContactMe() {
  return (
    <section className='section'>
      <div className='contact-me'>
        <MailMeForm />
        <div className='contact-me__info'>
          <h3 className='contact-me__subtitle'>Contacto</h3>
          <h2 className='contact-me__title'>Contáctame</h2>
          <p className='contact-me__text'>
            Si necesitas ayuda para construir tu sitio web y desplegarlo, no
            dudes en contactarme. Te ayudaré a desarrollar tu página con las
            tecnologías más usadas en la industria del desarrollo web como
            React, Sass y PHP.
          </p>
          <div className='reach-me'>
            <img src={phone_icon} alt='icono' className='reach-me__icon' />
            <p className='reachme__text'>MX +52 999-4141-93</p>
          </div>
          <div className='reach-me'>
            <img src={mail_icon} alt='icono' className='reach-me__icon' />
            <p className='reachme__text'>alcala.ricardoc@gmail.com</p>
          </div>
          <div className='reach-me'>
            <img src={address_icon} alt='icono' className='reach-me__icon' />
            <p className='reachme__text'>Mérida, Yucatán</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactMe;
