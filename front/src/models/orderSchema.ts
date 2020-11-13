import * as Yup from 'yup';

// orderSchema rules based on backend module
export const orderSchema = Yup.object({
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
