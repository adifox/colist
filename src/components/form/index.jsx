import React, { Component } from 'react';
import { Form, FormGroup, Col, FormControl, Checkbox, ControlLabel } from 'react-bootstrap';

import classes from './form.css';

class form extends Component {
  state = {
    email: '',
    password: '',
    remember: false
  }

  handleChange(e) {
    if (e.target.type === 'email') {
      this.setState({ email: e.target.value })
    } else if (e.target.type === 'password') {
      this.setState({ password: e.target.value })
    } else if (e.target.type === 'checkbox') {
      this.setState({ remember: !this.state.remember })
    }
  }
  
  sendForm() {
    console.log('The data to send', this.state)
  }

  render() {
    const { email, password } = this.state

    return (
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ ControlLabel } sm={ 2 }>
            Correo
          </Col>
          <Col sm={10}>
            <FormControl 
              type="email" 
              placeholder="Correo"
              value={ email }
              onChange={ (e) => this.handleChange(e) }
              />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ ControlLabel } sm={ 2 }>
            Contraseña
          </Col>
          <Col sm={10}>
            <FormControl 
              type="password"
              placeholder="Contraseña"
              value={ password }
              onChange={ (e) => this.handleChange(e) }
              />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={ 2 } sm={ 10 }>
            <Checkbox
              onChange={ (e) => this.handleChange(e) }
            >Recuerdame</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup className={ classes.submitButton }>
          <Col smOffset={ 2 } sm={ 10 }>
            <button onClick={ () => this.sendForm() } >Adelante</button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default form;