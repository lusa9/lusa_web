import React, { Component } from 'react';
import { Header } from "./header/Header";
import { RecentWork } from "./recent-work/RecentWork";
import { HireMe } from "./hire/Hire";
import { Footer } from "./Footer";

class App extends Component {

  render() {
    return (
      <div style={{display: "flex", flex:1, flexDirection: "column", minHeight: "100vh"}}>
        <Header/>
        <RecentWork/>
        <HireMe/>
        <Footer/>
      </div>
    )
  }
}

export default App;
