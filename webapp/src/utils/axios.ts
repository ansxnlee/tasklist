import axios from 'axios';
import { URL } from '../constants';

export const getTask = async () => {
  try {
    const res = await axios.get('http://localhost:4000/');
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