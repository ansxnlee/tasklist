import axios from 'axios';
import { URL } from '../constants';

export const getTasks = async () => {
  try {
    const res = await axios.get(URL.domain);
    return res;
  } catch (e) {
    console.error(e);
  }
}

export const createTask = async(taskTitle: string, taskText: string) => {
  try {
    const res = await axios.post(URL.domain, {
      title: taskTitle,
      text: taskText
    });
    return res;
  } catch (e) {
    console.error(e);
  }
}

export const deleteTask = async (taskId: string) => {
  try {
    const res = await axios.delete(URL.domain + taskId);
    return res;
  } catch (e) {
    console.error(e);
  }
}