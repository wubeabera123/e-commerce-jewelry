import React from "react";

const Email = () => {
    return ( 
    <div className="email">
        
            <h2 style={{textAlign: "center",fontWeight:'bold',fontFamily:'Cambria, Cochin, Georgia, Times, Times New Roman, serif',letterSpacing: "-1px",fontFamily: 'Roboto'}}>Join to us for updates</h2>
           <div class="input-group mb-3" style={{width: "450px",maxWidth:"100%",margin:"0 auto",marginTop: "4rem"}}>
               <input 
                  type="text" 
                  className="form-control"
                  placeholder="Enter your email" 
                  aria-label="Search" 
                  aria-describedby="search-button"
                  >
               </input>  
                <button 
                  class="btn" 
                  type="button" 
                  style={{backgroundColor:"#222222",borderRadius:"0",width:"35%"}}
                  >
                     <i class="bi " style={{color: "#FFFDFA"}}>Subscribe</i>
                </button>
           </div>
    </div> );
}
 
export default Email;