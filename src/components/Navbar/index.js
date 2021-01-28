import React, { useState } from 'react';

import './Navbar.scss';

import {
  Navbar as BSNavbar,
  Nav,
  Form,
  FormControl,
  Container,
} from 'react-bootstrap';

import logo from '../../assets/images/logo.png';

import Icon from '../../components/Icon';
import UserDropdown from '../../components/UserDropdown';

function Navbar() {
  const [active, setActive] = useState('division');

  return (
    <BSNavbar bg="white" expand="lg">
      <Container>
        <BSNavbar.Brand href="#home">
          <img src={logo} alt="" />
          FE Engineer Test 1
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              href="#home"
              active={active === 'home'}
              onClick={() => setActive('home')}
            >
              <Icon name="home" />
              Home
            </Nav.Link>
            <Nav.Link
              href="#entries"
              active={active === 'entries'}
              onClick={() => setActive('entries')}
            >
              <Icon name="projects" />
              Entries
            </Nav.Link>
            <Nav.Link
              href="#division"
              active={active === 'division'}
              onClick={() => setActive('division')}
            >
              <Icon name="opportunity" />
              Devisions
            </Nav.Link>
          </Nav>

          <Form inline>
            <div className="navbar-search-wrap">
              <Icon name="search" className="search-icon" />
              <FormControl type="text" className="mr-sm-2" />
            </div>
          </Form>
        </BSNavbar.Collapse>

        <div className="navbar-right">
          <Nav.Link href="#notifications" className="notification-icon">
            <Icon name="bell" />
          </Nav.Link>
          
          <UserDropdown />
        </div>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;
