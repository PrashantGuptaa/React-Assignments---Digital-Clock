import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        time: new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true
          })
        }
      }
      
      updateTime(){
      this.setState({
        time: new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true
          })
      })
      }
      
      componentDidMount(){
      console.log("Clock componentDidMount");
      this.intervalID = setInterval(() =>{
        this.updateTime();
      },1000)
      }
      
      
      
      componentWillUnmount(){
        console.log("Clock componentWillUnmount");
      clearInterval(this.intervalID);
      }
      
      render(){
        return(
      <div className='clock'>
      <div id='time'> {this.state.time}</div>
      
      </div>
        )
      };
}


export default App;
