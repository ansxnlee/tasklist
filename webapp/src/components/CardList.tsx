import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import { TaskProps } from '../utils/types';
import axios from 'axios';
import { URL } from '../constants';

export const CardList = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(URL.domain);
        setTasks(res!.data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <>
      {tasks.map(task => (
        <Card key={task.taskid} title={task.title} text={task.text} taskid={task.taskid} />
      ))}
    </>
  )
}
