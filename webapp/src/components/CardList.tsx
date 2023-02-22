import { useState, useEffect } from 'react';
import { getTask } from '../utils/axios';
import { Card } from '../components/Card';

interface TaskProps {
  title: string;
  text: string;
  id: string;
}

export const CardList = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  useEffect(() => {
    (async () => {
      const res = await getTask();
      setTasks(res!.data);
    })();
  }, []);

  return (
    <>
      {tasks.map(task => (
        <Card key={task.id} title={task.title} text={task.text} taskid={task.id} />
      ))}
    </>
  )
}