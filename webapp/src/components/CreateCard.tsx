import styled from '@emotion/styled';
import { COLORS } from '../constants';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { createTask } from '../utils/axios';

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
  const navigate = useNavigate();

  const createNewTask = async (task: TaskProps) => {
    try {
      createTask(task.title, task.text);
      navigate('/');
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
        onSubmit={(task) => createNewTask(task)}
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
