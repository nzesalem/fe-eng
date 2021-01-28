import './SidebarHeader.scss';

import PropTypes from 'prop-types';

import Icon from '../Icon';

function SidebarHeader({ icon, children }) {
  return (
    <div className="sidebar-header">
      <div className="icon-wrap">
        <Icon name={icon} />
      </div>
      {children}
    </div>
  );
}

SidebarHeader.propTypes = {
  icon: PropTypes.string.isRequired
};

export default SidebarHeader;
