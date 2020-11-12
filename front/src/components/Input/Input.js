import React from 'react';
import { Form } from 'react-bootstrap';
import { RECEIVER_CHANGE } from 'context/actionTypes';
import { OrderContext } from 'context/OrderContext';
import PropTypes from 'prop-types';

export const Input = ({ label, name, type, value, onBlur, handleChange, error, touched }) => {
  const { dispatch } = React.useContext(OrderContext);

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        name={name}
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={({ currentTarget }) => {
          handleChange({ currentTarget });
          dispatch({
            type: RECEIVER_CHANGE,
            payload: { [currentTarget.name]: currentTarget.value },
          });
        }}
        isInvalid={!!error && touched}
        isValid={!error && touched}
      />
      <Form.Control.Feedback type="invalid">{error && touched && error}</Form.Control.Feedback>
    </Form.Group>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  touched: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  error: '',
  touched: false,
};
