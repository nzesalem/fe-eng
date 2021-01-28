import './RiskLevel.scss';

import Icon from '../Icon';

import classnames from 'classnames';

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function RiskLevel(props) {
  const rickClass = classnames({
      'risk-level': true,
      [props.risk]: true,
    });

  return (
    <div className={rickClass}>
      <Icon name={`${props.risk}-risk`} className="risk-icon" />
      {capitalize(props.risk)} Risk
    </div>
  );
}

export default RiskLevel;
