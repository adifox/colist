import React, { Component } from 'react';

import MainBanner from '../mainBanner';
import SectionContainer from '../sectionContainer';
import Footer from '../footer';

class HomeComponent extends Component {
  render() {
    return (
      <div>
        <MainBanner />
        <SectionContainer />
        <Footer />
      </div>
    )
  }
}

export default HomeComponent;