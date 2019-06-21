import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter,MDBIcon } from "mdbreact";
import "../index.css";

const FooterPage = () => {
    const style = {
        cursor:'pointer'
        
      }
  return (
    <MDBFooter color="blue" className=" font-small pt-4 mt-4 footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">About Tirutsava</h5>
            <p>
Tirutsava is a conflation between technology and culture. The name is derived from a fusion of the words, "Tiru", from Tirupati, the city which houses our esteemed institute and "Utsava" which literally translates to “festival”.
            </p>
          </MDBCol>
          <MDBCol md="3">
               <h5 className="title">   &nbsp; &nbsp; &nbsp; &nbsp;Follow Us</h5>
            <ul>
              <li className="list-unstyled"> 
              <div style={style}><a href="https://www.facebook.com/"> <MDBIcon fab icon="facebook-f" fixed /> Facebook</a>  </div>
              </li>
              <li className="list-unstyled">
              <div style={style}><a href="https://twitter.com/?lang=en-in"> <MDBIcon fab icon="twitter" fixed /> Twitter</a>  </div>
              </li>
              <li className="list-unstyled">
              
        <div style={style}><a href="https://plus.google.com
"> <MDBIcon gradient="purple" fab icon="google-plus-g" fixed/> Google+</a>   </div>
              </li>
              <li className="list-unstyled">
              <div style={style}><a href="https://www.instagram.com"> <MDBIcon color="orange" fab icon="instagram" fixed/> Instagram</a>  </div>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
               <h5 className="title">   Contact Us</h5>
              <li className="list-unstyled"> 
              <div style={style}> <MDBIcon  icon="phone" fixed /> +9194XXXXXXXX  </div>
              </li>
              <li className="list-unstyled">
              <div style={style}> <MDBIcon icon="at" fixed /> XXXX@gmail.com </div>
              </li>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#"> Tirutsava </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;