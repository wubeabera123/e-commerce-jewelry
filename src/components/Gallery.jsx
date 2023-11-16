import React from "react";
import gallimg1 from '../resources/gallimg1.jpg';
import gallimg2 from '../resources/gallimg2.jpg';
import gallimg3 from '../resources/gallimg3.jpg';
import gallimg4 from '../resources/gallimg4.jpg';
import gallimg5 from '../resources/gallimg5.jpg';

const Gallery = () => {
    return ( 
    <div className="gallery">
        <h2 style={{textAlign: "center",fontWeight:'bold',fontFamily:'Cambria, Cochin, Georgia, Times, Times New Roman, serif',marginTop: "4rem",letterSpacing: "-1px"}}>Gallery</h2>
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={gallimg1} alt="" style={{width: "100%",height:'80vh',objectFit:"cover"}} />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                        <img src={gallimg2} alt="" style={{height:"40vh",objectFit:"cover"}}/>
                    </div>
                    <div className="row mt-4">
                        <div className="col-6 col-md-6 col-sm-4">
                            <img src={gallimg3} alt="" style={{width:"100%",height:'36vh',objectFit:"cover"}}/>
                        </div>
                        <div className="col-6 col-md-6 col-sm-4">
                            <img src={gallimg5} alt="" style={{width:"100%",height:"36vh",objectFit:"cover"}}/>
                         </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 mt-4 col-md-6 col-sm-12">
                    <img src={gallimg4} alt="" style={{height:"60vh",width:"100%",marginTop:'',objectFit:'cover'}} />
                </div>
            </div>
        </div>
    </div> );
}
 
export default Gallery;