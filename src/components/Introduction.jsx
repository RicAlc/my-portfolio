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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            labore repellendus deserunt sit, error sint nisi, culpa nemo, libero
            voluptate pariatur itaque omnis in temporibus.
          </p>
          <div className='about__LinkBtns'>
            <LinkBtn
              classname='explore-work'
              text='Ver proyectos'
              link='https://github.com/RicAlc'
              newTab={true}
            />
            <LinkBtn
              classname='about__contact-me'
              text='Contáctame'
              link='mailto:alcala.ricardoc@gmail.com'
              newTab={true}
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
