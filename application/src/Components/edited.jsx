function Gallery() 
{
const marie = {title : "Maria Skłodowska-Curie", src: "getImageUrl('szV5sdG')", width :"70", height:"70" }
    return
(
<>
      <h1>Notable Scientists</h1>
      <Profile {...marie}/>
      <Profile {...katsuko}/>
</>
);
};


export default function Profile()
{
    return(

        
    );
};