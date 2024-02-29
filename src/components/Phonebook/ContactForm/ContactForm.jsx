import { Formik, Field, Form } from 'formik';
function validateUsername(value) {
  let error;
  if (!value) error = 'Name is required';
  if (value === 'admin') {
    error = 'Nice try!';
  }
  return error;
}

export const ContactForm = ({ addContact }) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={async (values, actions) => {
          const contactAdded = addContact({ id: Date.now(), ...values });
          if (contactAdded) actions.resetForm();
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field
              id="name"
              name="name"
              placeholder="John Smith"
              validate={validateUsername}
            />
            {errors.name && touched.name && (
              <div style={{ color: 'red' }}>{errors.name}</div>
            )}
            <label htmlFor="number">Number</label>
            <Field id="number" name="number" placeholder="227-91-26" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
