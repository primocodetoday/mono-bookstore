// Delete this later
/* eslint-disable react/prop-types */
import React from 'react';
import { Form } from 'react-bootstrap';
import { receiverChange } from 'context/actions';
import { OrderContext } from 'context/OrderContextProvider';

export type Input = {
  label: string;
  name: string;
  value: string;
  type?: string;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  // FIXME handleChange refactor
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange: (e: React.FormEvent<any>) => void;
  error: string | undefined;
  touched: boolean | undefined;
};

export const Input: React.FC<Input> = ({
  label,
  name,
  type = 'text',
  value,
  onBlur,
  handleChange,
  error = '',
  touched = false,
}) => {
  const { dispatch } = React.useContext(OrderContext);

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
