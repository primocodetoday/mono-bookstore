﻿import * as React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import { bookstoreAPI } from 'services/bookstoreAPI';
import { SnackBar, Input } from 'components';
import { Link } from 'react-router-dom';
import { resetOrder } from 'context/actions';
import { orderSchema } from 'models/orderSchema';
import { ROUTES } from 'routes';
import { useOrderContext } from 'hooks/useOrderContext';

export type OrderFormProps = {
  setOrderPlaced: React.Dispatch<React.SetStateAction<boolean>>;
};

export const OrderForm = ({ setOrderPlaced }: OrderFormProps) => {
  const { state, dispatch } = useOrderContext();
  const [backEndPass, setBackPass] = React.useState(false);
  const [backEndRefuse, setBackEndRefuse] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    function orderBooks() {
      bookstoreAPI
        .post('order', state)
        .then((response) => {
          setOrderPlaced(true);
          setBackPass(true);
          dispatch(resetOrder());
          // eslint-disable-next-line no-console
          console.log('Order send', response.status);
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error('Server refuse your order', err);
          setBackEndRefuse(true);
        });
    }
    orderBooks();
  };

  return (
    <Col as="section">
      {state.order.length ? (
        <Formik
          validationSchema={orderSchema}
          initialValues={{
            first_name: '',
            last_name: '',
            city: '',
            zip_code: '',
          }}
          onSubmit={() => undefined}
        >
          {({ handleChange, handleBlur, values, touched, errors }) => (
            <Form className="d-flex flex-column" onSubmit={(e) => handleSubmit(e)}>
              <Input
                label="Imię"
                name="first_name"
                value={values.first_name}
                onBlur={handleBlur}
                handleChange={handleChange}
                error={errors.first_name}
                touched={touched.first_name}
              />
              <Input
                label="Nazwisko"
                name="last_name"
                value={values.last_name}
                onBlur={handleBlur}
                handleChange={handleChange}
                error={errors.last_name}
                touched={touched.last_name}
              />
              <Input
                label="Miasto"
                name="city"
                value={values.city}
                onBlur={handleBlur}
                handleChange={handleChange}
                error={errors.city}
                touched={touched.city}
              />
              <Input
                label="Kod pocztowy"
                name="zip_code"
                value={values.zip_code}
                onBlur={handleBlur}
                handleChange={handleChange}
                error={errors.zip_code}
                touched={touched.zip_code}
              />
              <Button variant="outline-warning" type="submit" className="text-uppercase font-weight-bolder  mx-auto">
                Zamawiam i płacę
              </Button>
            </Form>
          )}
        </Formik>
      ) : (
        <p className="text-success text-uppercase font-weight-bolder text-center">
          Twoje zamówienie zostało wysłane. <Link to={ROUTES.SHOP}>Wróc</Link> na stronę sklepu
        </p>
      )}
      <SnackBar toast={backEndPass} setToast={setBackPass} color="success" delay={3000}>
        Zamówienie zostało wysłane
      </SnackBar>
      <SnackBar toast={backEndRefuse} setToast={setBackEndRefuse} color="danger" delay={3000}>
        Popraw zamówienie
      </SnackBar>
    </Col>
  );
};
