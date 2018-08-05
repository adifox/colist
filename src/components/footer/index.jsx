import React from 'react';
import { Grid, Col } from 'react-bootstrap';

import classes from './footer.css';

const Footer = () => (
  <div className={ classes.Footer }>
    <Grid>
      <Col md={ 4 } xs={ 12 }>
        <p>Some amazing Self Promo here</p>
      </Col>
      <Col md={ 2 } xs={ 12 }>
        <p>Some amazing Info Stuff here</p>
      </Col>
      <Col md={ 2 } xs={ 12 }>
        <p>Some amazing Legal Stuff here</p>
      </Col>
      <Col md={ 4 } xs={ 12 }>
        <p>Some amazing Social Stuff here</p>
      </Col>
    </Grid>
    <div className={ classes.FooterEnd }>
      <p>Some copyright stuff here</p>
    </div>
  </div>
)

export default Footer;