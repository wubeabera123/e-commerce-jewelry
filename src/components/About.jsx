import React from "react";
import aboutimg1 from '../resources/aboutimg1.jpg';
import aboutimg2 from '../resources/aboutimg2.jpg';
import aboutimg3 from '../resources/aboutimg3.jpg';
import aboutimg4 from '../resources/aboutimg4.jpg';
const About = () => {
    return ( 
        <div className="about">
            <h2 style={{textAlign: "center",fontWeight:'bold',fontFamily:'Cambria, Cochin, Georgia, Times, Times New Roman, serif',marginTop: "2rem",letterSpacing: "-1px"}}>About Us</h2>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 col-sm-6 col-md-6">
                        <div className="row">
                           <p style={{fontFamily:'Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolorum aspernatur ducimus nisi sit qui quia reiciendis veniam odio dolorem sequi, eveniet, blanditiis accusantium molestias placeat rem non voluptatum ratione.</p>
                        </div>
                        <div className="row">
                           <img src={aboutimg1} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-md-6">
                           <img src={aboutimg2} alt="" style={{height: "69.5vh",width:'100%',objectFit: 'cover',marginTop: "0.5rem"}}/>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-6 col-sm-6 col-md-6">
                        <img src={aboutimg3} alt="" style={{height: "69.4vh",width:'100%',objectFit: 'cover',marginTop: "0.5rem"}}/>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-md-6">
                        <div className="row">
                            <p style={{fontFamily:'Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolorum aspernatur ducimus nisi sit qui quia reiciendis veniam odio dolorem sequi, eveniet, blanditiis accusantium molestias placeat rem non voluptatum ratione.</p>
                        </div>
                        <div className="row">
                            <img src={aboutimg4} alt="" />
                       </div>
                    </div>
                </div>
            </div>
        </div>
     )
};
 

export default About;