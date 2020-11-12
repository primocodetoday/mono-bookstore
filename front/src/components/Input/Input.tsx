import React from 'react';
import { Form } from 'react-bootstrap';
import { RECEIVER_CHANGE } from 'context/actionTypes';
import { OrderContext } from 'context/OrderContext';

export type Input = {
  label: string;
  name: string;
  value: string;
  type?: string;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleChange: (e: React.ChangeEvent<any>) => void;
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
          dispatch({
            type: RECEIVER_CHANGE,
            payload: { [e.currentTarget.name]: e.currentTarget.value },
          });
        }}
        isInvalid={!!error && touched}
        isValid={!error && touched}
      />
      <Form.Control.Feedback type="invalid">{error && touched && error}</Form.Control.Feedback>
    </Form.Group>
  );
};
