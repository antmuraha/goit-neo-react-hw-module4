import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('This field is required')
    .min(3, 'Name must be at least 3 characters long')
    .max(50, 'Name must not exceed 50 characters'),
  number: Yup.string()
    .required('This field is required')
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Format must be 123-45-67'),
});

export default validationSchema;
