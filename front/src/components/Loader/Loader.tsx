import * as React from 'react';
import { Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const Loader = () => {
  const { t } = useTranslation();
  return (
    <div style={{ height: '80vh' }} className="d-flex">
      <Spinner className="mx-auto my-auto" animation="border" role="status">
        <span className="sr-only">{t('loading')}...</span>
      </Spinner>
    </div>
  );
};
