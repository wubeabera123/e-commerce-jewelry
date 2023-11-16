import React from "react";
import jewe from '../resources/jewe.jpg';
import Button from '@mui/material/Button';
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
        <div className="image-container">
            <img src={jewe} style={{width: "100%",height: "100vh",objectFit: "cover"}} alt="" className="background-image"/>
            <div className="content">
              <p style={{fontFamily: 'Roboto',fontSize: "4rem",lineHeight: "1",fontWeight: "bold"}}>Your jewelry <br /> your style </p>
              <h5>Our jewelry make you different and unique</h5>
              <Button variant="outlined" style={{backgroundColor: "#FFFDFA", width:'50%',border: "1px solid black",marginTop: '2rem'}}>Catalog</Button>
            </div>
        </div>
     );
}
 
export default RandomImage;