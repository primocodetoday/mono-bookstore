import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import { OrderContext } from 'context/OrderContext';
import { bookstoreAPI } from 'services/bookstoreAPI';
import { SnackBar } from 'components';

export const OrderForm = () => {
  const { state, dispatch } = React.useContext(OrderContext);
  const [backEndPass, setBackPass] = React.useState(false);
  const [backEndRefuse, setBackRefuse] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    async function orderBooks() {
      await bookstoreAPI
        .post('order', state)
        .then(() => {
          dispatch({ type: 'RESET_ORDER' });
          setBackPass(true);
        })
        // eslint-disable-next-line no-console
        .catch(({ message }) => {
          console.log(message);
          setBackRefuse(true);
        });
    }
    // simulate delay
    orderBooks();
  };

  return (
    <>
      <Formik
        initialValues={{
          first_name: '',
          last_name: '',
          city: '',
          zip_code: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.first_name) {
            errors.first_name = 'Imię wymagane';
          } else if (!/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/i.test(values.first_name)) {
            errors.first_name = 'Nieprawidłowe imię';
          }
          if (!values.last_name) {
            errors.last_name = 'Nazwisko wymagane';
          } else if (!/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/i.test(values.last_name)) {
            errors.last_name = 'Nieprawidłowe nazwisko';
          }
          if (!values.city) {
            errors.city = 'Masto wymagane';
          } else if (!/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/i.test(values.city)) {
            errors.city = 'Miasto nieprawidłowe';
          }
          if (!values.zip_code) {
            errors.zip_code = 'Kod pocztowy wymagany';
          } else if (/^d{2}-d{3}$/i.test(values.zip_code)) {
            errors.zip_code = 'Nieprawidłowy kod';
          }
          return errors;
        }}
      >
        {({ handleChange, handleBlur, values, touched, errors }) => (
          <Form noValidate onSubmit={(e) => handleSubmit(e)}>
            <Form.Group controlId="first_name">
              <Form.Label>Imię</Form.Label>
              <Form.Control
                name="first_name"
                type="text"
                value={values.first_name}
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                  if (!errors.first_name) {
                    dispatch({ type: 'FIRST_NAME_CHANGE', payload: e.currentTarget.value });
                  }
                }}
                isInvalid={!!errors.first_name}
              />
              <p>{errors.first_name && touched.first_name && errors.first_name}</p>
            </Form.Group>
            <Form.Group controlId="last_name">
              <Form.Label>Nazwisko</Form.Label>
              <Form.Control
                name="last_name"
                type="text"
                value={values.last_name}
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                  if (!errors.last_name) {
                    dispatch({ type: 'LAST_NAME_CHANGE', payload: e.currentTarget.value });
                  }
                }}
                isInvalid={!!errors.last_name}
              />
              <p>{errors.last_name && touched.last_name && errors.last_name}</p>
            </Form.Group>
            <Form.Group controlId="city">
              <Form.Label>Miejscowość</Form.Label>
              <Form.Control
                name="city"
                type="text"
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                  if (!errors.city) {
                    dispatch({ type: 'CITY_CHANGE', payload: e.currentTarget.value });
                  }
                }}
                value={values.city}
                isInvalid={!!errors.city}
              />
              <p>{errors.city && touched.city && errors.city}</p>
            </Form.Group>
            <Form.Group>
              <Form.Label>Kod pocztowy</Form.Label>
              <Form.Control
                name="zip_code"
                type="text"
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                  if (!errors.zip_code) {
                    dispatch({ type: 'ZIP_CODE_CHANGE', payload: e.currentTarget.value });
                  }
                }}
                value={values.zip_code}
                isInvalid={!!errors.zip_code}
              />
            </Form.Group>
            <p>{errors.zip_code && touched.zip_code && errors.zip_code}</p>
            <Button variant="warning" type="submit">
              Zamawiam i płacę
            </Button>
          </Form>
        )}
      </Formik>
      <SnackBar toast={backEndPass} setToast={setBackPass} color="success">
        Zamówienie zostało wysłane
      </SnackBar>
      <SnackBar toast={backEndRefuse} setToast={setBackRefuse} color="danger" delay={3000}>
        Popraw zamówienie.
      </SnackBar>
    </>
  );
};
