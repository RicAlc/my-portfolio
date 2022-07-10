function LinkBtn({ text, classname, link, newTab }) {
  const action = (link) => {
    window.open(link, newTab ? "_blank" : "_self");
  };
  return (
    <div className={`btn ${classname}`} onClick={() => action(link)}>
      {text}
    </div>
  );
}
export default LinkBtn;
