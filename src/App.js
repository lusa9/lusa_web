import React, { Component } from 'react';
import { Header } from "./Header";
import { RecentWork } from "./RecentWork";
import { HireMe } from "./Hire";
import { Footer } from "./Footer";

class App extends Component {
  render() {
    return (
      <div style={{display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "whitesmoke"}}>
        <Header/>
        <RecentWork/>
        <HireMe/>
        <Footer/>
      </div>
    )
  }
}

export default App;
