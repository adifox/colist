import React, { Component } from 'react';
import { Grid, Row, Jumbotron } from 'react-bootstrap';

import classes from './sectionContainer.css';
import GooglePlay from '../../assets/images/btn-store-android.png';
import AppleStore from '../../assets/images/btn-store-ios.png';

class SectionContainer extends Component {
  render() {
    return (
      <div className={ classes.SectionContainer }>
        <Grid>
          <Row className={ classes.SectionHeader }>
            <h2>Descarga la app y no pierdas más el tiempo.</h2>
          </Row>
          <Row>
          <div className={ classes.AppIconBlock }>
            <ul className={ classes.StoreBtns }>
              <li>
                <a href=""><img src={ GooglePlay } alt="Aplicación para ahorar tiempo Android"/></a>
              </li>
              <li>
                <a href=""><img src={ AppleStore } alt="Aplicación para ahorar tiempo IOS"/></a>
              </li>
            </ul>
          </div>
          </Row>
          <Row className={ classes.SectionJumbotrons }>
            <Jumbotron className={ classes.JumbotronContainers }>
              <p>Paso 1  - descargate la App</p>
            </Jumbotron>
            <Jumbotron className={ classes.JumbotronContainers }>
              <p>Paso 2 - elije el centro de tu cita</p>
            </Jumbotron>
            <Jumbotron className={ classes.JumbotronContainers }>
              <p>Paso - 3 recibe el tiempo de espera en tiempo real</p>
            </Jumbotron>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default SectionContainer;