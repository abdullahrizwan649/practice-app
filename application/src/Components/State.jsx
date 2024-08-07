import { useState } from "react";
import data from "../array/people.json";

export default function StateUse() {
  const [age, setAge] = useState(17);

  const handleClick = () => {
    setAge((prevAge) => prevAge + 1);
  };

  return (
    <>
      <h1>HEY, I am {age}</h1>
      <button onClick={handleClick}>Update Age</button>
      <h2>HEY, I am {age} </h2>
    </>
  );
}
