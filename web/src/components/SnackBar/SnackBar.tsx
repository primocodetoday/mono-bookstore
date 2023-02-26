import * as React from 'react';
import { Toast } from 'react-bootstrap';

export type SnackBarProps = {
  toast: boolean;
  setToast: React.Dispatch<React.SetStateAction<boolean>>;
  color?: string;
  delay?: number;
  children: string;
};

export const SnackBar = ({ toast, setToast, children, color = 'primary', delay = 1500 }: SnackBarProps) => {
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
