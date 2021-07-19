import * as Yup from 'yup';

// orderSchema rules based on backend module
export const orderSchema = Yup.object({
  first_name: Yup.string().required('yup.enter_name').min(4, 'yup.name_to_short').max(50, 'yup.name_to_long'),
  last_name: Yup.string().required('yup.enter_surname').min(5, 'yup.surname_to_short').max(50, 'yup.surname_to_long'),
  city: Yup.string().required('yup.enter_city'),
  zip_code: Yup.string()
    .required('yup.enter_zip_code')
    .matches(/\d{2}-\d{3}/, 'yup.invalid_zip_code'),
});
