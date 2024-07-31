// function Item({ name, isPacked }) {
//   if (isPacked) {
//     return null;
//   } else {
//     return <li className="item">{name}X</li>;
//   }
// }

function Item({ name, isPacked }) 
{
  return (
    <li className="item">
      {isPacked ? <del>{name}</del> : name}
    </li>
  );
}

function PackingList() 
{
  return (
    <>
      <h1>PACKING LIST</h1>
      <Item isPacked={true} name="Speaker " />
      <Item isPacked={false} name="Speaker Charger " />
    </>
  );
}

export default PackingList;
