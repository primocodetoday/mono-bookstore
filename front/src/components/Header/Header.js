﻿import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ children }) => {
  return (
    <header>
      <h4 className="mb-4 text-uppercase">{children}</h4>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.string.isRequired,
};
