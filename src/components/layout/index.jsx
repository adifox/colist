import React from 'react';

import Header from '../header';
import Footer from '../footer';

const layout = (props) => (
  <div>
    <Header />
    <div>
      { props.children }
    </div>
    <Footer />
  </div>
)

export default layout;