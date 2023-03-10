import { useState } from 'react';
import styled from '@emotion/styled';
import { COLORS } from '../constants';
import { useNavigate } from 'react-router-dom';
import { deleteTask } from '../utils/axios';
import { TaskProps } from '../utils/types'

/**
 * Task Card Component
 * @param title - title of task (max 20 char.)
 * @param text - text of task (max 150 char.)
 * @param id - id of task (as given by relational db)
 * @returns JSX Element
 */
export const Card = ({ title, text, taskid }: TaskProps) => {
  const [readyDelete, setReadyDelete] = useState(false);
  const navigate = useNavigate();

  const confirmDelete = () => {
    deleteTask(taskid!);
    setReadyDelete(false);
    navigate(0);
  }

  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
      <DeleteTrigger onClick={() => {setReadyDelete(true)}}>Delete Task</DeleteTrigger>
      {readyDelete ? 
        <DeleteModalContainer id={taskid!}>
          <DeleteModal>
            <DeleteText>Are you sure you want to delete task: {title}? (id={taskid})</DeleteText>
            <DeleteCancel onClick={() => {setReadyDelete(false)}}>Cancel</DeleteCancel>
            <DeleteConfirm onClick={() => confirmDelete()}>Confirm</DeleteConfirm> 
          </DeleteModal>
        </DeleteModalContainer> :
        <></>
      }
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 20px;
  background-color: ${COLORS.componentBackground};
  border-radius: 20px;
`;

const CardTitle = styled.div`
  font-size: 1.5em;
  color: ${COLORS.text};
`;

const CardText = styled.span`
  color: ${COLORS.text};
`;

const DeleteTrigger = styled.button`
  margin-top: 10px;
`;

const DeleteModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 10000;
  backdrop-filter: blur(4px);
`;

const DeleteModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 40%;
  border-radius: 20px;
  background-color: ${COLORS.altBackground};
  backdrop-filter: blur(4px);
`;

const DeleteText = styled.span`
  color: white;
`;

const DeleteCancel = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const DeleteConfirm = styled.button`
  background-color: red;
  color: white;
`;
