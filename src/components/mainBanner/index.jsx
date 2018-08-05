import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import classes from './mainBanner.css';
import CityColist from '../../assets/images/city-colist.png';

const MainBanner = () => (
  <div className={ classes.MainBanner }>
    <Grid>
      <Row className={ classes.MainBannerContent }>
        <Col md={ 6 } xs={ 12 } className={ classes.MainTitle }>
          <h1>¿Cansado de esperar?</h1>
          <h3>Si tienes colist sabes exactamente cuando es tu turno. Colist es gratis y hasta un niño podrá manejarlo. Y lo más importante es, que siempre conservamos tu <span className={classes.Red}>anonimato</span>.</h3>
        </Col>
        <Col md={ 6 } xs={ 12 } className={ classes.BannerPic }>
          <img src={ CityColist } alt='Colist'/> 
        </Col>
      </Row>
    </Grid>
  </div>
)
export default MainBanner;