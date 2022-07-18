import LinkBtn from "./LinkBtn";
import WorkCardList from "./WorkCardsList";

function LatestWork() {
  return (
    <section className='section bg-dark'>
      <div className='latest-work' id='latestWork'>
        <div className='latest-work__subtext'>PORTFOLIO</div>
        <div className='work'>
          <h2 className='latest-work__title'>Proyectos recientes</h2>
          <LinkBtn
            classname='explore-more'
            link='https://github.com/RicAlc'
            newTab={true}
            text='EXPLORAR MÁS'
          />
        </div>
        <WorkCardList />
      </div>
    </section>
  );
}
export default LatestWork;
