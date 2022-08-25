import WorkCard from './WorkCard';
function WorkCardList({ data }) {
  const work_cards = data.map((card) => {
    return <WorkCard key={card.id} {...card} />;
  });
  return (
    <div className='wc-container'>
      <div className='work-card-list'>{work_cards}</div>;
    </div>
  );
}
export default WorkCardList;
