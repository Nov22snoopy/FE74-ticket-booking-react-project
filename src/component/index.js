import React, { Component } from "react";
import  ChairList  from "./ChairList";
import Result from "./Result";

// import "./booking.css"
export class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <h1 className="text-center">DAT VE XEM PHIN CYBERLEARN.VN</h1>
            <div className="screen bg-dark text-white w-75 m-auto p-2 ">SCREEN</div>
            <ChairList/>
          </div>
          <div className="col-5">
            <Result/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
