import React from 'react';
import { Toast } from 'react-bootstrap';

export type TSnackBar = {
  toast: boolean;
  setToast: React.Dispatch<React.SetStateAction<boolean>>;
  color?: string;
  delay?: number;
  children: string;
};

export const SnackBar: React.FC<TSnackBar> = ({ toast, setToast, children, color = 'primary', delay = 1500 }) => {
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
