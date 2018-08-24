import React, { Component } from 'react';

import Layout from './components/layout';
import Container from './components/container';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Container />
        </Layout>
      </div>
    );
  }
}

export default App;
