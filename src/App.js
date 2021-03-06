import React, { Component } from 'react';
import { Header } from "./header/Header";
import { RecentWork } from "./recent-work/RecentWork";
import { HireMe } from "./hire/Hire";
import { Footer } from "./footer/Footer";
import { WhatWeDo } from './what-we-do/WhatWeDo';

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <WhatWeDo/>
        <RecentWork/>
        <HireMe/>
        <Footer/>
      </div>
    )
  }
}

export default App;
