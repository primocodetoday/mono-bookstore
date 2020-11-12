import React from 'react';
import PropTypes from 'prop-types';

export const Header: React.FC = ({ children, ...restProps }) => {
  return (
    <header {...restProps}>
      <h4 className="mb-4 text-uppercase">{children}</h4>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.string.isRequired,
};
