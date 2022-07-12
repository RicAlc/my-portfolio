function WorkCard({ link, imgFile, title, tag }) {
  return (
    <div className='work-card' onClick={() => window.open(link, "_blank")}>
      <img
        src={require(`../assets/${imgFile}`)}
        alt='Previzualización de la aplicación'
        className='work-card__img'
      />
      <div className='work-card__tag'>{tag}</div>
      <h1 className='work-card__title'>{title}</h1>
    </div>
  );
}
export default WorkCard;
