import React, { Component } from 'react';
import Intro from '../Intro';
//import logo from './logo.svg';
import './App.css';
//import {ReactBingmaps} from '../../../node_modules/react-bingmaps';
import { ReactBingmaps } from '../ReactBingmaps';


class App extends Component {

  state = {
    things:[]
  }

  componentDidMount(){
    const things = ["Bread", "Cheese"];

    setTimeout(()=> {
      this.setState({ things : things})

    },2000 );
  }


  render() {
    return (
      <div 
        className="App">
        <header 
          className="App-header">
         
          <p>
            SNU
          </p>
          
        </header>

        <Intro 
          message="Here you can everything..."/>

        Things on sold array - {this.state.things.length}

        <ReactBingmaps 
            bingmapKey = "AmQVHuojATmRiCmfMxmj9mAdYUe_xYCqcR90NmxKhJAS89eKDcICQY-tkkKXRNkx">
        </ReactBingmaps> 
        

      </div>
    );
  }
}

export default App;
