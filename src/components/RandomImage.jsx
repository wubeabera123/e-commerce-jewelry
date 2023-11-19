import React from "react";
import { useState, useEffect } from "react";
//import jewe from '../resources/jewe.jpg';
import jewd from '../resources/jewd.jpg';
//import jewa from '../resources/jewa.jpg';
//import jewb from '../resources/jewb.jpg';
//import jewc from '../resources/jewc.jpg';
import Button from '@mui/material/Button';
const RandomImage = () => {
    return ( 
        <div className="image-container">
            <img src={jewd} alt="" style={{objectFit:'cover',backgroundSize:'cover',width:"100%",height:'100vh'}}/>
            <div className="content">
              <p style={{fontFamily: 'Roboto',fontSize: "4rem",lineHeight: "1",fontWeight: "bold"}}>Your jewelry <br /> your style </p>
              <h5>Our jewelry make you different and unique</h5>
              <Button variant="contained " size="large" style={{backgroundColor: "#FFFDFA",marginTop: '2rem',width: '200px',maxWidth: '100%',background: "rgba(0, 0, 0, 0.5)"}}>Catalog</Button>
            </div>
        </div>
     );
}
 
export default RandomImage;