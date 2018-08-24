import React, { Component } from 'react';

import Profile from '../profile';
import HomeContainer from '../homeContainer';

class container extends Component {
  render () {
    return(
      <div>
        <HomeContainer />
        <Profile />
      </div>
    )
  }
}

export default container;