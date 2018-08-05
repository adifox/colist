import React from 'react';

import Header from '../header';

const layout = (props) => (
  <div>
    <Header />
    <div>
      { props.children }
    </div>
  </div>
)

export default layout;