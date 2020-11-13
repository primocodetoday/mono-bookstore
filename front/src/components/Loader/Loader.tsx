import React from 'react';
import { Spinner } from 'react-bootstrap';

export const Loader: React.FC = () => {
  return (
    <div style={{ height: '80vh' }} className="d-flex">
      <Spinner className="mx-auto my-auto" animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};
