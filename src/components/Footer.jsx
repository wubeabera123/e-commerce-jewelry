import React from "react";
import {useState, useEffect} from 'react';
import jewelry from '../resources/jewelry.png';

const Footer = () => {
   const [isVisible, setIsVisible] = useState(false);

   // Show or hide the button based on scroll position
   const handleScroll = () => {
     const scrollTop = window.pageYOffset;
     if (scrollTop > 100) {
       setIsVisible(true);
     } else {
       setIsVisible(false);
     }
   };
 
   // Add event listener for scroll event
   useEffect(() => {
     window.addEventListener('scroll', handleScroll);
     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, []);
 
   // Scroll to top when the button is clicked
   const scrollToTop = () => {
     window.scrollTo({
       top: 0,
       behavior: 'smooth',
     });
   };

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
         <button
           className={`scroll-to-top ${isVisible ? 'show' : 'hide'}`}
           onClick={scrollToTop}
           style={{position:"fixed",bottom:"20px",right:"20px",zIndex:"9999"}}>
         Scroll to Top
         </button>
       </div> 
       );
}
 
export default Footer;