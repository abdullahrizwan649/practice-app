export default function EventResponse() {
  return (
    <>
      <FormSubmit funct={handleClick}>WOW</FormSubmit>
      {/* <AlertButton funct={handleClick}>GREAT</AlertButton> */}
    </>
  );
}

// function AlertButton({ funct, children }) {
//   return <button onClick={funct}>{children}</button>;
// }

function handleClick(e) {
  e.preventDefault(); //prevents from refreshing after submitting
  alert("CLICKED");
}

function FormSubmit({ funct, children }) {
  return (
    <form onSubmit={funct}>
      <input />
      <button>{children}</button>
    </form>
  );
}
//children is a special prop jbtw
