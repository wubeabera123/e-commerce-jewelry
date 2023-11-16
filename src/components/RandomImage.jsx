import React from "react";
import jewe from '../resources/jewe.jpg';
import jewd from '../resources/jewd.jpg';
import jewa from '../resources/jewa.jpg';
import jewb from '../resources/jewb.jpg';
import jewc from '../resources/jewc.jpg';
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
            <img src={jewa} style={{width: "100%",height: "100vh",objectFit: "cover"}} alt="" className="background-image"/>
            <div className="content">
              <p style={{fontFamily: 'Roboto',fontSize: "4rem",lineHeight: "1",fontWeight: "bold"}}>Your jewelry <br /> your style </p>
              <h5>Our jewelry make you different and unique</h5>
              <Button variant="contained " size="large" style={{backgroundColor: "#FFFDFA",marginTop: '2rem',width: '200px',maxWidth: '100%',background: "rgba(0, 0, 0, 0.5)"}}>Catalog</Button>
            </div>
        </div>
     );
}
 
export default RandomImage;