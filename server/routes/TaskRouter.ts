import express from 'express';
import {
  getTask,
  getTasks,
  createTask,
  updateTask
} from '../controllers/TaskController';

export const TaskRouter = express.Router();

TaskRouter.get('/', getTasks);
TaskRouter.get('/:id', getTask);
TaskRouter.post('/', createTask);
TaskRouter.put('/:id', updateTask);
