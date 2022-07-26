import * as React from 'react';

export type HeaderProps = {
  children: string;
  className?: string;
};

export const Header = ({ children, ...restProps }: HeaderProps) => {
	return (
		<header {...restProps}>
			<h4 className="mb-4 text-uppercase">{children}</h4>
		</header>
	);
};
