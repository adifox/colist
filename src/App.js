import React, { Component } from 'react';

import Layout from './components/layout';
// import MainContainer from './components/mainContainer';
import HomeComponent  from './components/homeContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <HomeComponent />
        </Layout>
      </div>
    );
  }
}

export default App;
