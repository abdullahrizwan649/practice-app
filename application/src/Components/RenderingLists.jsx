import data from "../array/people.json";

//Generating a list of items from an array
function RenderingLists() {
  const listItems = data.map((person) => 
    (
    <li key={person.id}>
      {person.name}: {person.profession}
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export default RenderingLists;
