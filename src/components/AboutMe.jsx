import aboutme from "../assets/aboutme.png";
function AboutMe() {
  return (
    <section className='section bg-light'>
      <div className='about-me'>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            accusamus explicabo numquam facere laborum vel vitae ad. Amet
            sapiente veritatis porro, iste nesciunt quasi soluta assumenda eius
            ex? Accusantium, iure assumenda labore explicabo aspernatur
            blanditiis.
          </p>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
