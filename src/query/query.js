import React from "react";
import { MDBFreeBird, MDBInput, MDBCol, MDBRow, MDBCardBody, MDBCardTitle, MDBBtn, MDBContainer, MDBEdgeHeader } from
"mdbreact";

const EdgeHeaderPage = (props) => {
    return (
      <MDBContainer className="mt-3">
        <MDBEdgeHeader style={{ backgroundImage: `url(https://myanmarfasttrack.com/wp-content/uploads/2018/08/help-and-support.png)` }}></MDBEdgeHeader>
        <MDBFreeBird> 
          <MDBRow>
            <MDBCol key='14' md="8" lg="7" className="mx-auto float-none white z-depth-1 py-2 px-2">
              <MDBCardBody>
                <MDBCardTitle >Facing Problem Send Your Queries Here.(Dynamically Updated Try once)</MDBCardTitle>
                <p className="pb-4">You Will Soon Get Help From Us.</p>
                <form>
                  <MDBInput fluid  onChange={props.nameChange}  label="Your name" group type="text" icon="user" />
                  <MDBInput onChange={props.emailChange} label="Your email" group type="email" icon="envelope" />
                  <MDBInput onChange={props.doubtChange} type="textarea" rows="2" label="Textarea" icon="pencil-alt" />
                  <MDBBtn onClick={props.update} color="mdb-color" className="text-xs-left">Submit</MDBBtn>
                </form>
                <div className="my-2">
                  <p style={{ fontWeight: "300", fontSize: "0.75rem" }}>Never submit your passwords here</p>
                </div>
              </MDBCardBody>
              
              <div key='13'>
                  <ol>
              {props.faq.map((person,index) => 
                        <li key='12'><p >Name : {person.name}   ,    Email : {person.email}
                            <div>Doubt : {person.doubt}</div>
                            <div>Update : {person.sol}</div>
                            </p></li>

              )}
              </ol>
              </div>
            </MDBCol>
            
          </MDBRow>
          
        </MDBFreeBird>
      </MDBContainer>
    );
};

export default EdgeHeaderPage;