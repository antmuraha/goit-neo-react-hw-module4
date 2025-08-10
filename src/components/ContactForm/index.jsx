import classnames from '../../libs/classnames';
import { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import validationSchema from './validationSchema';

import styles from './index.module.css';

async function createContact(name, number) {
  // Simulate an API call to create a contact
  await new Promise(resolve => setTimeout(resolve, 300));

  return {
    id: Date.now(),
    name,
    number,
  };
}

const ContactForm = props => {
  const { onAddContact } = props;
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: '',
    number: '',
  };

  const handleAddContact = async (values, { resetForm }) => {
    setLoading(true);
    const newContact = await createContact(values.name, values.number);
    onAddContact(newContact);
    setLoading(false);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleAddContact}>
      {({ errors, touched }) => (
        <Form className={styles.contactForm} autoComplete="off">
          <label>
            Name
            <Field type="text" name="name" />
            <div className={classnames(styles.error, errors.name && touched.name && styles.errorVisible)}>
              {errors.name}
            </div>
          </label>
          <label>
            Number
            <Field type="tel" name="number" />
            <div className={classnames(styles.error, errors.number && touched.number && styles.errorVisible)}>
              {errors.number}
            </div>
          </label>
          <button type="submit" disabled={loading} className={styles.addButton}>
            {loading ? 'Adding...' : 'Add Contact'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
