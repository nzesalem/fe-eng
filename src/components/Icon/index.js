import './Icon.scss';

import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';

const Icon = ({ name, className, ...rest }) => {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        ImportedIconRef.current = (await import(`!!@svgr/webpack?-svgo,+titleProp,+ref!../../assets/icons/${name}.svg`)).default;
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    const iconClass = classnames({
      icon: true,
      [className]: true,
    })
    return (
      <span className={iconClass}>
        <ImportedIcon {...rest} />
      </span>
    );
  }

  return null;
};

export default Icon;