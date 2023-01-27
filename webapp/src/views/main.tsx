import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '../components/Card';
import { RouteButton } from '../components/RouteButton';
import { Title } from '../components/Title';
import { ViewContainer } from '../components/ViewContainer';
import { getTask } from '../utils/axios';

interface TaskProps {
  title: string;
  text: string;
  id: string;
}

const Main = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  useEffect(() => {
    (async () => {
      const res = await getTask();
      setTasks(res!.data);
    })();
  }, []);

  return (
    <ViewContainer height='100%'>
      <Title text='Tasklist' />
      <RouteButton text='Create New Task' href='/newtask' />
      {tasks.map(task => (
          <Card key={task.id} title={task.title} text={task.text} taskid={task.id} />
      ))}
    </ViewContainer>
  );
}

export default Main;
