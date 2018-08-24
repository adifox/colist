import React, { Component } from 'react';

import MainBanner from '../mainBanner';
import SectionContainer from '../sectionContainer';

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <MainBanner />
        <SectionContainer />
      </div>
    )
  }
}

export default HomeContainer;