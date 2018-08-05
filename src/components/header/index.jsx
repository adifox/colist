import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import Modal from '../modal';

import classes from './header.css';

class header extends Component {
  state = {
    modalOpen: false
  }

  handleOpen = () => {
    this.setState({ modalOpen: true })
  }

  handleClose = () => {
    this.setState({ modalOpen: false })
  }

  render () {

    const login = (
      <NavItem>
        <button onClick={ this.handleOpen }>Empieza ahorar tiempo</button>
      </NavItem>
    )

    const modal = (
      <Modal
        modalOpen={ this.state.modalOpen }
        closeHandler={ this.handleClose }
      />
    )
    
    return (
      <Navbar collapseOnSelect fixedTop className={ classes.NavigationTransparent }>
        <Navbar.Header>
          <Navbar.Brand>
            <a className={ classes.Brand } href="#home">colist</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            { login }
          </Nav>
        </Navbar.Collapse>
        { modal }
      </Navbar>
    )
  }
}

export default header;

