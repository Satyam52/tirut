import React, { Component } from "react";
import { MDBNotification } from "mdbreact";

class Notification extends Component {
    render(){
  return (
    <MDBNotification
      show
      fade
      title="Hover Here Please!"
      message="Hello, Please Hover here to see the change"
      text="just now"
      style={{
        position: "absolute",
        top: 0,
        right:0
      }}
      autohide={3000}
    />
  );}
};

export default Notification;