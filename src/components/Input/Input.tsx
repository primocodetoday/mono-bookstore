import * as React from 'react';
import { Form } from 'react-bootstrap';
import { receiverChange } from 'context/actions';
import { useOrderContext } from 'hooks/useOrderContext';

export type InputProps = {
  label: string;
  name: string;
  value: string;
  type?: string;
  onBlur: (e: React.FocusEvent) => void;
  handleChange: (e: React.ChangeEvent) => void;
  error: string | undefined;
  touched: boolean | undefined;
};

export const Input = ({
	label,
	name,
	type = 'text',
	value,
	onBlur,
	handleChange,
	error = '',
	touched = false,
}: InputProps) => {
	const { dispatch } = useOrderContext();

	return (
		<Form.Group>
			<Form.Label>{label}</Form.Label>
			<Form.Control
				name={name}
				type={type}
				value={value}
				onBlur={onBlur}
				onChange={(e) => {
					handleChange(e);
					dispatch(receiverChange(e.currentTarget.name, e.currentTarget.value));
				}}
				isInvalid={!!error && touched}
				isValid={!error && touched}
			/>
			<Form.Control.Feedback type="invalid">{error && touched && error}</Form.Control.Feedback>
		</Form.Group>
	);
};
