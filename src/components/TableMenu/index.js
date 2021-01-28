import './TableMenu.scss';

import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

import Icon from '../Icon';

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href="#menu"
    className="table-menu-toggle"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <Icon name="menu-vertical" />
  </a>
));

class TableMenu extends React.Component {
  render() {
    return (
      <Dropdown alignRight>
        <Dropdown.Toggle as={CustomToggle} />

        <Dropdown.Menu>
          <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
          <Dropdown.Item eventKey="2">Remove</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default TableMenu