import LinkBtn from "./LinkBtn";
import dev from "../assets/Ricardo.png";

function Introduction() {
  return (
    <section className='section bg-dark' role='main'>
      <div className='introduction'>
        <div className='about'>
          <h1 className='name'>RICARDO ALCALÁ</h1>
          <h2 className='profession'>Desarrollador web</h2>
          <p className='about__desc'>
            !Hola¡, soy Ricardo soy un desarrollador web apasionado por la
            tecnología, programación y la electrónica.
          </p>
          <div className='about__LinkBtns'>
            <LinkBtn
              classname='explore-work'
              text='Ver proyectos'
              link='#latestWork'
              newTab={false}
            />
            <LinkBtn
              classname='about__contact-me'
              text='Contáctame'
              link='#contactMe'
              newTab={false}
            />
          </div>
        </div>
        <div className='me-fig'>
          <img
            src={dev}
            alt='Imágen del desarrollador'
            className='me-fig__img'
          />
        </div>
      </div>
    </section>
  );
}
export default Introduction;
