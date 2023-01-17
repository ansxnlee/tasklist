import express from 'express';
import {
  getTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask
} from '../controllers/TaskController';

export const TaskRouter = express.Router();

TaskRouter.get('/:id', getTask);
TaskRouter.put('/:id', updateTask);
TaskRouter.delete('/:id', deleteTask);
TaskRouter.get('/', getTasks);
TaskRouter.post('/', createTask);
