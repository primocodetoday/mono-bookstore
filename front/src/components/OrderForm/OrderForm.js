import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import { OrderContext } from 'context/OrderContext';
import { bookstoreAPI } from 'services/bookstoreAPI';
import { SnackBar } from 'components';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

export const OrderForm = ({ setOrderPlaced }) => {
  const { state, dispatch } = React.useContext(OrderContext);
  const [backEndPass, setBackPass] = React.useState(false);
  const [backEndRefuse, setBackRefuse] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    async function orderBooks() {
      await bookstoreAPI
        .post('order', state)
        .then((response) => {
          setOrderPlaced(true);
          setBackPass(true);
          dispatch({ type: 'RESET_ORDER' });
          // eslint-disable-next-line no-console
          console.log('Order send', response.status);
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error('Server refuse your order', err);
          setBackRefuse(true);
        });
    }
    orderBooks();
  };
  // orderSchema rules based on backend module
  const orderSchema = Yup.object({
    first_name: Yup.string().required('Podaj imię').min(4, 'Imię zbyt krótkie').max(50, 'Imię zbyt długie'),
    last_name: Yup.string()
      .required('Podaj nazwisko')
      .min(5, 'Nazwisko zbyt krótkie')
      .max(50, 'Nazwisko zbyt długie')
      .required('Podaj nazwisko'),
    city: Yup.string().required('Podaj nazwę miasta'),
    zip_code: Yup.string()
      .required('Podaj kod pocztowy')
      .matches(/\d{2}-\d{3}/, 'Kod nieprawidłowy'),
  });

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
        >
          {({ handleChange, handleBlur, values, touched, errors }) => (
            <Form className="d-flex flex-column" onSubmit={(e) => handleSubmit(e)}>
              <Form.Group>
                <Form.Label>Imię</Form.Label>
                <Form.Control
                  name="first_name"
                  type="text"
                  value={values.first_name}
                  onBlur={handleBlur}
                  onChange={(e) => {
                    handleChange(e);
                    dispatch({ type: 'FIRST_NAME_CHANGE', payload: e.currentTarget.value });
                  }}
                  isInvalid={!!errors.first_name && touched.first_name}
                  isValid={!errors.first_name && touched.first_name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.first_name && touched.first_name && errors.first_name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Nazwisko</Form.Label>
                <Form.Control
                  name="last_name"
                  type="text"
                  value={values.last_name}
                  onBlur={handleBlur}
                  onChange={(e) => {
                    handleChange(e);
                    dispatch({ type: 'LAST_NAME_CHANGE', payload: e.currentTarget.value });
                  }}
                  isInvalid={!!errors.last_name && touched.last_name}
                  isValid={!errors.last_name && touched.last_name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.last_name && touched.last_name && errors.last_name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Miejscowość</Form.Label>
                <Form.Control
                  name="city"
                  type="text"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    handleChange(e);
                    dispatch({ type: 'CITY_CHANGE', payload: e.currentTarget.value });
                  }}
                  value={values.city}
                  isInvalid={!!errors.city && touched.city}
                  isValid={!errors.city && touched.city}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.city && touched.city && errors.city}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Kod pocztowy</Form.Label>
                <Form.Control
                  name="zip_code"
                  type="text"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    handleChange(e);
                    dispatch({ type: 'ZIP_CODE_CHANGE', payload: e.currentTarget.value });
                  }}
                  value={values.zip_code}
                  isInvalid={!!errors.zip_code && touched.city}
                  isValid={!errors.zip_code && touched.zip_code}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.zip_code && touched.zip_code && errors.zip_code}
                </Form.Control.Feedback>
              </Form.Group>
              <Button variant="outline-warning" type="submit" className="text-uppercase font-weight-bolder  mx-auto">
                Zamawiam i płacę
              </Button>
            </Form>
          )}
        </Formik>
      ) : (
        <p className="text-success text-uppercase font-weight-bolder text-center">
          Twoje zamówienie zostało wysłane. <Link to="/shop/1">Wróc</Link> na stronę sklepu
        </p>
      )}
      <SnackBar toast={backEndPass} setToast={setBackPass} color="success" delay={3000}>
        Zamówienie zostało wysłane
      </SnackBar>
      <SnackBar toast={backEndRefuse} setToast={setBackRefuse} color="danger" delay={3000}>
        Popraw zamówienie
      </SnackBar>
    </Col>
  );
};
