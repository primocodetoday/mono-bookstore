import React from 'react';
import { Toast } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const SnackBar = ({ toast, setToast, children, color, delay }) => {
  return (
    <Toast
      animation
      className="position-fixed fixed-top mx-auto mt-3"
      onClose={() => setToast(false)}
      show={toast}
      delay={delay}
      autohide
    >
      <Toast.Body className={`text-center text-${color} font-weight-bold text-uppercase`}>{children}</Toast.Body>
    </Toast>
  );
};

SnackBar.propTypes = {
  toast: PropTypes.bool.isRequired,
  setToast: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  delay: PropTypes.number,
};

SnackBar.defaultProps = {
  color: 'primary',
  delay: 1500,
};
