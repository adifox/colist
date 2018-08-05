import React, { Component } from 'react';

import CreateDate from '../createDate';

class MainContainer extends Component {
  render() {
    return (
      <div className={ 'container' }>
        <CreateDate />
        <p>The main container</p>
        
      </div>
    )
  }
}

export default MainContainer;