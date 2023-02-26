import * as React from 'react';
import { OrderContext } from '@/context/OrderContextProvider';

export const useOrderContext = () => {
	const ctx = React.useContext(OrderContext);
	if (!ctx) {
		throw new Error('Missing ToastsContext data!');
	}
	return ctx;
};
