import * as React from 'react';
import { Col } from 'react-bootstrap';
import { Header, OrderForm } from 'components';
import { Link } from 'react-router-dom';
import { ROUTES } from 'routes';
import { useOrderContext } from 'hooks/useOrderContext';
import { useTranslation } from 'react-i18next';

const Order = () => {
	const { state } = useOrderContext();
	const [wasOrderPlaced, setOrderPlaced] = React.useState(false);
	const { t } = useTranslation();

	const { order } = state;

	return (
		<Col xs={12}
			md={10}
			lg={6}
			className="px-1 mx-auto">
			<Header className="text-center">Zamówienie</Header>
			{wasOrderPlaced || order.length ? (
				<OrderForm setOrderPlaced={setOrderPlaced} />
			) : (
				<p className="text-center">
					{t('order.no_items_info')}. <Link to={ROUTES.SHOP}>{t('order.back')}</Link> {t('order.to_bookstore')}
				</p>
			)}
		</Col>
	);
};

export default Order;
