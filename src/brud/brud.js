import React from "react";
import '../index.css';
import { MDBBreadcrumb, MDBBreadcrumbItem, Container } from "mdbreact";

const BreadcrumbPage = props => {
  return (
    <Container fluid="true" id='wd'>
        {/* <MDBBreadcrumb light color="default">
          <MDBBreadcrumbItem active>Home</MDBBreadcrumbItem>
        </MDBBreadcrumb> */}

        <MDBBreadcrumb fluid="true" light className="bk">
          <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>{props.route==="home"?"" :props.route.toUpperCase() }</MDBBreadcrumbItem>
        </MDBBreadcrumb>
    </Container>
  );
};

export default BreadcrumbPage;