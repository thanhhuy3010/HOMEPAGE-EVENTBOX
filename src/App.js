import React, { Component } from 'react';
import './App.css';

import Navbar from './Component/Navbar';
import SubNavbar from './Component/SubNavbar';
import Carousel3d from './Component/Carousel'
import Searching from './Component/Search'
import Content from './Component/Content'
import data from './Data/data'
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      event:{},
      events:[]
    }
  }
  
  render() {
    return (
        <div>
          <Navbar/>
          <SubNavbar/>
          <Carousel3d/>
          <Searching/>
          <Content
            data={data}
          />      
        </div>
    );
  }
}

export default App;
