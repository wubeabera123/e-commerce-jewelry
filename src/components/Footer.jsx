import React from "react";
import jewelry from '../resources/jewelry.png';

const Footer = () => {
    return (
       <div className="footer">
         <div className="footer-text">
           <img src={jewelry} style={{width: "4rem",height: "4rem",borderRadius: "10px",marginTop:'5rem'}}/>
           <p style={{color:"#F8F8F8",marginTop:'1rem',fontFamily:'roboto'}}>We always care about your style and uniqueness <br /> Feel free to connect with us</p>
          </div>
          <div className="container mt-5" style={{textAlign:'center'}}>
             <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                   <p style={{color:"#F8F8F8"}}>jewelry@gmail.com</p>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                   <p style={{color:"#F8F8F8"}}>Addis Ababa, Piassa</p>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                   <p style={{color:"#F8F8F8"}}>+251974222863</p>
                </div>
             </div>  
          </div>
         <hr className="footer-line" />
         <p style={{color:"#F8F8F8",textAlign:"center"}}>@2023 created by Wubeshet Abera. All rights reserved. <br /></p>
       </div> 
       );
}
 
export default Footer;