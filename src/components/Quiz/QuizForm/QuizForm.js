import { Formik, Field } from 'formik';
import { StyledErrMess, StyledForm } from './QuizForm.styled';
import * as Yup from 'yup';
import { useState } from 'react';
import { addQuizze } from 'api';
import toast, { Toaster } from 'react-hot-toast';
const SignupSchema = Yup.object().shape({
  topic: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'not Valid name!'
    )
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  time: Yup.number()
    .min(10, 'At least 5 min!')
    .max(60, 'Max - 60 min!')
    .positive('Must be positive!')
    .required('Required'),
});

export const QuizForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const resetRequestData = () => {
    setLoading(true);
    setError(false);
  };
  const addQuiz = async newQuiz => {
    console.log(newQuiz);
    try {
      resetRequestData();
      const addedQuiz = await addQuizze(newQuiz);

      toast.success('Added succesfully');
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Formik
        initialValues={{
          topic: '',
          time: 0,
          questions: 0,
          level: 'beginner',
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values, actions) => {
          //await new Promise(r => setTimeout(r, 500));
          //alert(JSON.stringify(values, null, 2));
          addQuiz(values);
          actions.resetForm();
        }}
      >
        {({ errors, touched }) => (
          <StyledForm>
            <h3>Quiz Form</h3>
            <label>
              Quiz topic <Field name="topic" placeholder="Quiz topic" />
              {errors.topic && touched.topic ? <div>{errors.topic}</div> : null}
            </label>

            <label>
              Quiz time <Field name="time" type="number" />
              <StyledErrMess component="div" name="time" />
            </label>

            <label>
              Quiz questions <Field name="questions" type="number" />
            </label>

            <label>
              Quiz level{' '}
              <Field name="level" as="select">
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </Field>
            </label>

            <button type="submit">Submit</button>
          </StyledForm>
        )}
      </Formik>
      {loading && <div>Loading...</div>}
      {error && !loading && <div>OOPS! Error!</div>}
      <Toaster />
    </div>
  );
};
