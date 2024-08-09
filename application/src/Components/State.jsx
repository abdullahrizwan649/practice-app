import { useState } from "react";
import data from "../array/people.json";

// export default function StateUse() {
//   const [age, setAge] = useState(17);

//   const handleClick = () => {
//     setAge((prevAge) => prevAge + 1);
//   };

//   return (
//     <>
//       <h1>HEY, I am {age}</h1>
//       <button onClick={handleClick}>Update Age</button>
//       <h2>HEY, I am {age} </h2>
//     </>
//   );
// }

const filamentArray = [
  { brand: "Bambu", temperature: "220", color: "red" },
  { brand: "Jamg He", temperature: "210", color: "yellow" },
];

export default function StateUse() {
  const [filament, setFilament] = useState({
    brand: "Creality",
    temperature: "210",
    color: "black",
  });

  const updateFilament = (brand) => {
    const newFilament = filamentArray.find(
      (filament) => filament.brand === brand
    );
    if (newFilament) {
      setFilament(newFilament);
    }
  };

  return (
    <>
      <h1>FILAMENT DETAILS</h1>
      <h2>
        It is a {filament.color} filament from {filament.brand}.
      </h2>
      <button onClick={() => updateFilament("Bambu")}>BAMBU</button>
      <button onClick={() => updateFilament("Jamg He")}>JAMG HE </button>
    </>
  );
}
