const arr = ["abdullah: rizwan", "ahmad: farid", "hammad: doctor"];



//Generating a list of items from an array
function RenderingLists() {
  const listItems = arr.map((banda) => <li>{banda}</li>);
  return <ul>{listItems}</ul>;
}

export default RenderingLists;
