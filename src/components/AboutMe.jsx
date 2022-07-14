import aboutme from "../assets/aboutme.png";
function AboutMe() {
  return (
    <section className='section bg-light'>
      <div className='about-me' id='about_me'>
        <div className='about-me__figure'>
          <img
            src={aboutme}
            alt='Figura de Ricardo Alcalá'
            className='about-me__img'
          />
        </div>
        <div className='description'>
          <div className='description__name'>Ricardo Alcalá</div>
          <h2 className='description__profession'>
            Desarrollador web full stack
          </h2>
          <h3 className='description__title'>
            Desarrollando aplicaciones web con las tecnologías más usadas
          </h3>
          <p className='description__text'>
            Hola, me llamo Ricardo y soy un Ingeniero en mecatrónica apasionado
            por la informática con afinación a la programación y a la
            electrónica. Me encantan el desarrollo web, los perros, estar
            actualizado con temas de tecnología y siempre estar aprendiendo
            cosas nuevas.
          </p>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
