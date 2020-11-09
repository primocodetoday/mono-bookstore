import React from 'react';
import { Toast } from 'react-bootstrap';

import PropTypes from 'prop-types';

export const SnackBar = ({ toast, setToast, children }) => {
  return (
    <Toast
      className="position-fixed fixed-top mx-auto mt-3"
      onClose={() => setToast(false)}
      show={toast}
      delay={3000}
      autohide
    >
      <Toast.Body className="text-center text-success font-weight-bold">{children}</Toast.Body>
    </Toast>
  );
};

SnackBar.propTypes = {
  toast: PropTypes.bool.isRequired,
  setToast: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
