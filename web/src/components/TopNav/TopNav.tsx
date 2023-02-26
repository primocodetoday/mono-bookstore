import * as React from 'react';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LocaleSelector } from '@/components';
import { ROUTES } from '@/routes';
import { useOrderContext } from '@/hooks/useOrderContext';
import { useTranslation } from 'react-i18next';

export const TopNav = () => {
	const { t } = useTranslation();
	const { state } = useOrderContext();

	const { order } = state;

	return (
		<Navbar bg="warning"
			variant="dark"
			expand="sm"
			className="mb-4 "
			sticky="top">
			<Navbar.Brand as={NavLink}
				to={ROUTES.HOME}>
				<i className="fas fa-book-open mr-3" />
				<strong className="text-uppercase">{t('shared.bookstore')}</strong>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto align-items-end h5">
					<Nav.Link className="text-light text-uppercase font-weight-bolder"
						as={NavLink}
						exact
						to={ROUTES.HOME}>
						{t('shared.shop')}
					</Nav.Link>
					<Nav.Link className="text-light ml-auto text-uppercase font-weight-bolder"
						as={NavLink}
						to={ROUTES.BASKET}>
						{t('shared.basket')}
						<Badge className="ml-2 badge-success">{order ? order.length : '0'}</Badge>
					</Nav.Link>
					<LocaleSelector />
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
