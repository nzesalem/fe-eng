import './UserDropdown.scss';

import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

import Icon from '../Icon';

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href="#user"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <div className="user-dropdown-toggle">
      <div className="user-avatar">
        <Icon name="user" />
      </div>
      <Icon name="chevron-down" className="chevron-icon" />
    </div>
  </a>
));

class UserDropdown extends React.Component {
  render() {
    return (
      <Dropdown alignRight>
        <Dropdown.Toggle as={CustomToggle} />

        <Dropdown.Menu>
          <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
          <Dropdown.Item eventKey="2">Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="1">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default UserDropdown