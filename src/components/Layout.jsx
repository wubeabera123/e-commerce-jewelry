import React from "react";
import {useState, useEffect} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import jewelry from '../resources/jewelry.png';
//import AiOutlineSearch from 'react-icons/ai';
import { styled, alpha } from '@mui/material/styles';
const Layout = () => {
    
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange=(event)=>{
          setSearchTerm(event.target.value);
    };
    const handleSearch=(event)=>{
        event.preventDefault();
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }
    return ( 
        <div style={{backgroundColor: "#0F0F0F",height: "5.2rem",position: "fixed",width: "100%",background: "rgba(0, 0, 0, 0.6)",
        zIndex: "3"}}>
           <Navbar className="container" expand='lg' >
              <Navbar.Brand style={{cursor: "pointer"}}><img src={jewelry} style={{width: "4rem",height: "4rem",borderRadius: "10px"}}/></Navbar.Brand>
              <Navbar.Toggle   aria-controls="basic-navbar-nav" style={{backgroundColor: "#FFFDFA"}}/>
              <Navbar.Collapse className=" justify-content-center" id="basic-navbar-nav"> 
                <div onClick={toggleMenu}>
                 <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                  <Nav className="nav-links d-flex justify-content-center">
                    <Nav.Link style={{fontWeight: "bold",fontFamily: "",color: "#FFFDFA",marginRight: "20px"}}>Home</Nav.Link>
                    <Nav.Link style={{fontWeight: "bold",fontFamily:"'Cambria, Cochin, Georgia, Times, 'Times New Roman', serif !important",color: "#FFFDFA",marginRight: "20px"}}>About</Nav.Link>
                    <Nav.Link style={{fontWeight: "bold",color: "#FFFDFA",marginRight: "20px"}}>Catalog</Nav.Link>
                    <Nav.Link style={{fontWeight: "bold",color: "#FFFDFA",marginRight: "20px"}}>Contacts</Nav.Link>
                  </Nav>
                 </div>
                </div>
              </Navbar.Collapse>  
                  <div>
                     <div onSubmit={handleSearch} class="input-group mb-3" style={{width: "rem",marginTop: "10px"}}>
                       <input 
                       type="text" 
                       className="form-control"
                       placeholder="Search..." 
                       aria-label="Search" 
                       aria-describedby="search-button"
                       value={searchTerm}
                       onChange={handleChange}>
                      </input>  
                        <button 
                        class="btn" 
                        type="button" id="search-button"
                        style={{backgroundColor:"#222222"}}
                        >
                           <i class="bi bi-search" style={{color: "#FFFDFA"}}>Search</i>
                        </button>
                     </div>
                  </div>
           </Navbar>
        </div>  
     );

}
 
export default Layout;