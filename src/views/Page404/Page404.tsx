import * as React from 'react';
import { useTranslation } from 'react-i18next';

const Page404 = () => {
  const { t } = useTranslation();
  
  return (
    <div style={{ height: '80vh' }} className="d-flex">
      <p className="h5 mx-auto my-auto text-uppercase font-weight-bolder text-center">{t('shared.404_info')}</p>
    </div>
  );
};

export default Page404;
