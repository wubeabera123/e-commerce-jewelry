import React from "react";

const RandomImage = () => {
    const images = [
        '../resources/jewa.jpg',
        '../resources/jewb.jpg',
        '../resources/jewc.jpg',
        '../resources/jewd.jpg',
        '../resources/jewe.jpg'
   ];
   const randomIndex = Math.floor(Math.random() * images.length);
   const randomImage = images[randomIndex];
    return ( 
        <div className="fbody">
            <img src={randomImage} style={{width: "100%",height: "110vh",objectFit: "cover"}} alt=""/>
        </div>
     );
}
 
export default RandomImage;