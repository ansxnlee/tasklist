import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '../components/Card';
import { RouteButton } from '../components/RouteButton';
import { Title } from '../components/Title';
import { ViewContainer } from '../components/ViewContainer';

interface TaskProps {
  title: string;
  text: string;
}

const Main = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:4000/');
      setTasks(res.data)
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchTasks();
    })();
  }, []);

  return (
    <ViewContainer height='100%'>
      <Title text='Tasklist' />
      <RouteButton text='Create New Task' href='/newtask' />
      {tasks.map(task => (
        <Card title={task.title} text={task.text} />
      ))}
    </ViewContainer>
  );
}

export default Main;
