/* eslint-disable react/prop-types */
import React from 'react';

export type HeaderProps = {
  children: string;
  className?: string;
};

export const Header: React.FC<HeaderProps> = ({ children, ...restProps }) => {
  return (
    <header {...restProps}>
      <h4 className="mb-4 text-uppercase">{children}</h4>
    </header>
  );
};
