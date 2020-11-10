import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import { OrderContext } from 'context/OrderContext';
import { bookstoreAPI } from 'services/bookstoreAPI';
import { SnackBar } from 'components';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

export const OrderForm = ({ setWasSubmitted }) => {
  const { state, dispatch } = React.useContext(OrderContext);
  const [backEndPass, setBackPass] = React.useState(false);
  const [backEndRefuse, setBackRefuse] = React.useState(false);

  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    async function orderBooks() {
      await bookstoreAPI
        .post('order', state)
        .then(() => {
          setWasSubmitted(true);
          setBackPass(true);
          dispatch({ type: 'RESET_ORDER' });
        })
        .catch(({ message }) => {
          // eslint-disable-next-line no-console
          console.log(message);
          setBackRefuse(true);
        });
    }
    // simulate delay
    orderBooks();
  };

  const orderSchema = Yup.object({
    first_Name: Yup.string().min(4, 'Imię zbyt krótkie').max(50, 'Imię zbyt długie').required('Podaj imię'),
    last_Name: Yup.string().min(5, 'Nazwisko zbyt krótkie').max(50, 'Nazwisko zbyt długie').required('Podaj nazwisko'),
    city: Yup.string().required('Podaj nazwę miasta'),
    zip_code: Yup.string()
      .required('Podaj kod pocztowy')
      .matches(/\d{2}-\d{3}/, 'Kod nieprawidłowy'),
  });

  // FIXME Correct validation below

  return (
    <Col as="main">
      {state.order.length ? (
        <Formik
          validationSchema={orderSchema}
          initialValues={{
            first_name: '',
            last_name: '',
            city: '',
            zip_code: '',
          }}
          // validate={(values) => {
          //   const errors = {};
          //   if (!values.first_name) {
          //     errors.first_name = 'Imię wymagane';
          //   } else if (!/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/i.test(values.first_name)) {
          //     errors.first_name = 'Nieprawidłowe imię';
          //   }
          //   if (!values.last_name) {
          //     errors.last_name = 'Nazwisko wymagane';
          //   } else if (!/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/i.test(values.last_name)) {
          //     errors.last_name = 'Nieprawidłowe nazwisko';
          //   }
          //   if (!values.city) {
          //     errors.city = 'Miasto wymagane';
          //   } else if (!/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/i.test(values.city)) {
          //     errors.city = 'Miasto nieprawidłowe';
          //   }
          //   if (!values.zip_code) {
          //     errors.zip_code = 'Kod pocztowy wymagany';
          //   } else if (/^d{2}-d{3}$/i.test(values.zip_code)) {
          //     errors.zip_code = 'Nieprawidłowy kod';
          //   }
          //   return errors;
          // }}
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
                    if (!errors.first_name) {
                      dispatch({ type: 'FIRST_NAME_CHANGE', payload: e.currentTarget.value });
                    }
                  }}
                  isInvalid={!!errors.first_name}
                />
                <p>{errors.first_name && touched.first_name && errors.first_name}</p>
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
                    if (!errors.last_name) {
                      dispatch({ type: 'LAST_NAME_CHANGE', payload: e.currentTarget.value });
                    }
                  }}
                  isInvalid={!!errors.last_name}
                />
                <p>{errors.last_name && touched.last_name && errors.last_name}</p>
              </Form.Group>
              <Form.Group>
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
              <Form.Group className="mb-4">
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
                <p>{errors.zip_code && touched.zip_code && errors.zip_code}</p>
              </Form.Group>
              <Button variant="warning" type="submit" className="text-uppercase font-weight-bolder text-light mx-auto">
                Zamawiam i płacę
              </Button>
            </Form>
          )}
        </Formik>
      ) : (
        <p className="text-success">
          Twoje zamówienie zostało wysłane. <Link to="/shop/1">Wróc</Link> na stronę sklepu
        </p>
      )}
      <SnackBar toast={backEndPass} setToast={setBackPass} color="success">
        Zamówienie zostało wysłane
      </SnackBar>
      <SnackBar toast={backEndRefuse} setToast={setBackRefuse} color="danger" delay={3000}>
        Popraw zamówienie
      </SnackBar>
    </Col>
  );
};
