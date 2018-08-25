import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Profile from '../profile';
import HomeContainer from '../homeContainer';

class container extends Component {
  render () {
    return(
        <Switch>
          <Route exact path='/' component={ HomeContainer }/>
          <Route exact path='/profile' component={ Profile }/>
        </Switch>
    )
  }
}

export default container;