import React from 'react';
import { MDBIcon } from "mdbreact";
import Tilt from 'react-tilt';
import './nac.css';

const Nav = ({Route})=>{
    const style = {
        cursor:'pointer'
        
      }
      return (
          
        <nav className="bkg navbar navbar-toggleable-md navbar-light bg-faded" >
        <div id="qq">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
              
          </span>
          
        </button>        
        <div style={style} onClick={()=>Route('home')} className="nav-link pilo" id="h" ><MDBIcon icon="home" fixed />  Home <span className="sr-only"></span></div>
        </div>
        <Tilt className="Tilt br2 shadow-2" options={{ max : 65 }} style={{ height: 50, width: 170 }} >
        <div style={style} className="navbar-brand " id="or">Tirutsava</div>
        </Tilt>
        <div className="collapse navbar-collapse " id="navbarSupportedContent" >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <div style={style} onClick={()=>Route('gallery')} className="nav-link pilo" id="xd">Gallery</div>
            </li>
            <li className="nav-item">
              <div style={style} onClick={()=>Route('event')} className="nav-link pilo" id="xd">Events</div>
            </li>
            <li className="nav-item">
              <div style={style} onClick={()=>Route('team')} className="nav-link pilo" id="xd">Team</div>
            </li>
            <li className="nav-item">
              <div style={style}  onClick={()=>Route('help')} className="nav-link pilo" id="xd">Having Trouble?</div>
            </li>
          </ul>
          
          </div>
        </nav>
      );
    }
  
  export default Nav;
  