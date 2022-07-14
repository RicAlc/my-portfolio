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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            exercitationem libero saepe ad quam necessitatibus magni, obcaecati
            ex provident voluptas.s
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
