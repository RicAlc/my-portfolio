import LinkBtn from './LinkBtn';
import cardsData from '../data/cards.json';
import WorkCardList from './WorkCardsList';

function LatestWork() {
  return (
    <section className='section bg-dark'>
      <div className='latest-work' id='latestWork'>
        <div className='latest-work__subtext'>PORTFOLIO</div>
        <div className='work'>
          <h2 className='latest-work__title'>Proyectos recientes</h2>
          <LinkBtn
            classname='explore-more'
            link='https://ricalc.netlify.app/portfolio'
            newTab={true}
            text='EXPLORAR MÁS'
          />
        </div>
        <WorkCardList data={cardsData} />
      </div>
    </section>
  );
}
export default LatestWork;
