import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { COLORS } from '../constants';
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

interface TaskProps {
  title: string;
  text: string;
}

const FormSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short')
    .max(15, 'Too Long')
    .required('Title is Required'),
  text: Yup.string()
    .min(2, 'Too Short')
    .max(150, 'Too Long')
    .required('Text is Required'),
});

export const CreateCard = () => {
  const createTask = async (task: TaskProps) => {
    try {
      const res = await axios.post('http://localhost:4000/', {
        title: task.title,
        text: task.text
      });
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <FormContainer>
      <Formik
        initialValues={{
          title: '',
          text: '',
        }}
        validationSchema={FormSchema}
        onSubmit={(task) => createTask(task)}
      >
        {({ errors, touched}) => (
          <Form>
            <label htmlFor='title'>Task Title</label>
            <Field name='title' />
            {errors.title || touched.title ? (
              <div>Hint: {errors.title}</div>
            ) : <div>Hint: -</div>}
            <br />
            <label htmlFor='text'>Task Text</label>
            <Field name='text' />
            {errors.text || touched.text ? (
              <div>Hint: {errors.text}</div>
            ) : <div>Hint: -</div>}
            <br />
            <button type='submit'>Create Task</button>
          </Form>
        )}
      </Formik>
    </FormContainer>
  )
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 20px;
  background-color: ${COLORS.componentBackground};
  border-radius: 20px;
`;
