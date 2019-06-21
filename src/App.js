import React, { Component } from "react";
// import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import Colo from './colo';
import Gallery from './gallery/gallery';
import Query from './query/query'
import Footer from './footer/footer'
import Nav from './Nav/Nav';
import NOTI from './Noti/notification';
import Jumbo from './jimbo/jumbo';
import Jumbo1 from './jimbo/jumbo1';
import Brud from './brud/brud';
import Team from './team/team';
import Event from './event/event';

class App extends Component {
  state = {
    route:'home',
    faq : [
      {name:'XX',email:"XXX@gmail.com", doubt:'When will the PUBG event start ??',sol:"PUBG will start on XX Feb 2020"},
      {name:'XX',email:"XXX@gmail.com", doubt:'How I register For an event ??',sol:'Create an account and register for your favoriate event '}

    ],
    namec:'',
    emailc:'',
    doubtc:''
  }
  onRouteChange = (route) =>{
    this.setState({route:route});
  }
  nameChange = (event)=>{
      this.setState({ namec:event.target.value })
  }
  emailChange = (event)=>{
    this.setState({ emailc:event.target.value})
    // console.log(this.state.emailc)
  }
  doubtChange = (event)=>{
    this.setState({ doubtc:event.target.value})
  }
  update = ()=>{
    var adon=  [
      {name:this.state.namec,email:this.state.emailc,doubt:this.state.doubtc
      }
    ]
    var newState = adon.concat(this.state.faq)
    this.setState({ faq: newState });

  }
  
  render() {
    return (
      <div>
      <Nav Route={this.onRouteChange}/>
      <Brud Route={this.onRouteChange} route={this.state.route}/>
      {this.state.route==="home"
      ?<div>
      <Colo/>
      <NOTI/>
      <Jumbo/>
     
      <Jumbo1/>
      </div>
      :(this.state.route==="gallery"
      ?<Gallery/>
      :(this.state.route==="help"? <Query faq={this.state.faq} nameChange={this.nameChange} namec={this.state.namec} emailChange={this.emailChange} 
        doubtChange={this.doubtChange} update={this.update}
      />
      :(this.state.route==="team"? <Team/>:<Event/>
      
      )))}
      <Footer/>
      </div>
    );
  }
}

export default App;
