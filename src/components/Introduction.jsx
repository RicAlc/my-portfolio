import LinkBtn from "./LinkBtn";
import dev from "../assets/Ricardo.png";

function Introduction() {
  return (
    <section className='introduction'>
      <div className='about'>
        <h3 className='name'>RICARDO ALCALÁ</h3>
        <h2 className='profession'>Desarrollador web</h2>
        <p className='about__desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          labore repellendus deserunt sit, error sint nisi, culpa nemo, libero
          voluptate pariatur itaque omnis in temporibus.
        </p>
        <div className='about__LinkBtns'>
          <LinkBtn
            classname={"explore-work"}
            text='Ver proyectos'
            link='https://www.facebook.com'
            newTab={true}
          />
          <LinkBtn
            classname='contact-me'
            text='Contáctame'
            link='https://twitter.com/home'
            newTab={true}
          />
        </div>
      </div>
      <div className='me-fig'>
        <img src={dev} alt='Imágen del desarrollador' className='me-fig__img' />
      </div>
    </section>
  );
}
export default Introduction;
