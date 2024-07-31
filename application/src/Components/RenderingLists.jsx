import data from "../array/people.json";

//Generating a list of items from an array
function RenderingLists() {
  const chemists = data.filter((person) => person.profession === "chemist");

  const listItems = chemists.map((person) => (
    <li key={person.id}>
      {person.name} : {person.profession}
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export default RenderingLists;
