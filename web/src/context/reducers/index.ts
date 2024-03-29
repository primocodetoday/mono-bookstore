﻿/* eslint-disable no-console */
import { OrderActionTypes, ActionTypes } from '../actions';

export type IItem = {
  _id: string;
  quantity?: number;
};

export type TState = {
  order: IItem[];
  first_name: string;
  last_name: string;
  city: string;
  zip_code: string;
};

export const initialOrderState: TState = {
	order: [],
	first_name: '',
	last_name: '',
	city: '',
	zip_code: '',
};

export const orderReducer = (state = initialOrderState, action: OrderActionTypes): TState => {
	switch (action.type) {
		case ActionTypes.REMOVE_BOOK:
			if (state.order.find((item) => item._id === action.payload._id && item.quantity > 1)) {
				console.log('Book in order, subtracting quantity');
				return {
					...state,
					order: state.order.map((item) =>
						item._id === action.payload._id
							? {
								...item,
								quantity: item.quantity - 1,
							}
							: item,
					),
				};
			}
			console.log('Book deleted');
			return {
				...state,
				order: [...state.order.filter((item) => item._id !== action.payload._id)],
			};
		case ActionTypes.ADD_BOOK:
			if (state.order.find((item) => item._id === action.payload._id)) {
				console.log('Book in order, adding quantity');
				return {
					...state,
					order: state.order.map((item) =>
						item._id === action.payload._id
							? {
								...item,
								quantity: item.quantity + 1,
							}
							: item,
					),
				};
			}
			console.log('New Book added');
			return { ...state, order: [...state.order, action.payload] };
		case 'RECEIVER_CHANGE':
			return { ...state, ...action.payload };
		case 'RESET_ORDER':
			return { ...initialOrderState };
		default:
			throw new Error();
	}
};
