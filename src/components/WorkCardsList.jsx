import cardsData from "../data/cards.json";
import WorkCard from "./WorkCard";
function WorkCardList() {
  const work_cards = cardsData.map((card) => {
    return <WorkCard key={card.id} {...card} />;
  });
  return (
    <div className='wc-container'>
      <div className='work-card-list'>{work_cards}</div>;
    </div>
  );
}
export default WorkCardList;
