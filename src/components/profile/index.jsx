import React, { Component } from 'react';

import classes from './profile.css';

class profile extends Component {
  render () {
    return(
      <div className={ classes.Profile }>
        <p>
          the Whole profile component
        </p>
      </div>
    )
  }
}

export default profile;