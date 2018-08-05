import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import Form from '../form';

import classes from './modal.css';

class modal extends Component {
  
  render() {
    return (
      <Modal show={ this.props.modalOpen } onHide={ () => this.props.closeHandler() } className={ classes.modal }>
        <Modal.Header closeButton className={ classes.modalHeader }>
          <Modal.Title>Bienvenido a Colist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form />
        </Modal.Body>
        <Modal.Footer className={ classes.modalFooter }>
          <button onClick={ () => this.props.closeHandler() }>Cerrar</button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default modal;