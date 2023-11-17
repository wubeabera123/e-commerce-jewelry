import React from "react";
import cardimg1 from '../resources/cardimg1.jpg';
import cardimg2 from '../resources/cardimg2.jpg';
import cardimg3 from '../resources/cardimg3.jpg';
import cardimg4 from '../resources/cardimg4.jpg';
import cardimg5 from '../resources/cardimg5.jpg';
import cardimg6 from '../resources/cardimg6.jpg';


const Store = () => {
    return (
    <div className="store">
        <h2 style={{textAlign: "center",fontWeight:'bold',fontFamily:'Cambria, Cochin, Georgia, Times, Times New Roman, serif',marginTop: "2rem",letterSpacing: "-1px"}}>Our Online Store</h2>
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-4">
                   <div className="card" style={{width: "100%"}}>
                       <img src={cardimg1} style={{height: "65vh",objectFit: "cover"}} alt="" />
                       <div className="card-body">
                           <h4 className="card-title">Earrings "Moon"</h4>
                           <h5 className="price" style={{fontWeight: "bold",marginTop: '1rem'}}>$ 120.00</h5>
                       </div>
                   </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-4">
                   <div className="card a" style={{width: "100%"}}>
                       <img src={cardimg2} style={{height: "65vh",objectFit: "cover"}} alt="" />
                       <div className="card-body">
                           <h4 className="card-title">Earrings "Moon"</h4>
                           <h5 className="price" style={{fontWeight: "bold",marginTop: '1rem'}}>$ 120.00</h5>
                       </div>
                   </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-4">
                   <div className="card b" style={{width: "100%"}}>
                       <img src={cardimg3} style={{height: "65vh",objectFit: "cover"}} alt="" />
                       <div className="card-body">
                           <h4 className="card-title">Earrings "Moon"</h4>
                           <h5 className="price" style={{fontWeight: "bold",marginTop: '1rem'}}>$ 120.00</h5>
                       </div>
                   </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-4 col-md-6 col-sm-4">
                   <div className="card d" style={{width: "100%"}}>
                       <img src={cardimg4} style={{height: "65vh",objectFit: "cover"}} alt="" />
                       <div className="card-body">
                           <h4 className="card-title">Earrings "Moon"</h4>
                           <h5 className="price" style={{fontWeight: "bold",marginTop: '1rem'}}>$ 120.00</h5>
                       </div>
                   </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-4">
                   <div className="card e" style={{width: "100%"}}>
                       <img src={cardimg5} style={{height: "65vh",objectFit: "cover"}} alt="" />
                       <div className="card-body">
                           <h4 className="card-title">Earrings "Moon"</h4>
                           <h5 className="price" style={{fontWeight: "bold",marginTop: '1rem'}}>$ 120.00</h5>
                       </div>
                   </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-4">
                   <div className="card f" style={{width: "100%"}}>
                       <img src={cardimg6} style={{height: "65vh",objectFit: "cover"}} alt="" />
                       <div className="card-body">
                           <h4 className="card-title">Earrings "Moon"</h4>
                           <h5 className="price" style={{fontWeight: "bold",marginTop: '1rem'}}>$ 120.00</h5>
                       </div>
                   </div>
                </div>
            </div>
        </div>
        <button type="button" class="btn btn-outline-secondary mx-auto mt-5" style={{width: '200px',maxWidth: '100%',display:"flex",justifyContent:"center",alignItems: "center"}}>View all</button>
    </div> 
    );
}
 

export default Store;