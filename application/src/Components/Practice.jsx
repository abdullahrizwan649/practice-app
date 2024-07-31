function Avatar(props) {
  const { width, height, src, text, price } = props;
  return (
    <>
      <img width={width} height={height} src={src} alt={text}></img>
      <h1>{text}</h1>
      <h2>{price}</h2>
    </>
  );
}
function Practice() {
  const info = {
    src: "src/assets/wow.jpg",
    text: "OBJECT DETECTED",
    price: "12",
    width: "300",
    height: "300",
  };
  return (
    <>
      <Avatar {...info} />
      <Avatar {...info} />
    </>
  );
}

export default Practice;
