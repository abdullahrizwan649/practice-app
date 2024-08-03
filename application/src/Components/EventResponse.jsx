export default function EventResponse() 
{
  function handleClick() {
    alert("CLICKED");
  }

  return <button onClick={() => alert('You clicked me!')}>WOW</button>

}
