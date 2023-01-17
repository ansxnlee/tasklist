import { Request, Response } from 'express';
import { FilterQuery, QueryOrder } from '@mikro-orm/core';

import { DI } from '../server';
import { TaskEntity } from '../entities/TaskEntity';

export const getTasks = async (_req: Request, res: Response) => {
  const tasks = await DI.taskRepository.findAll({
    orderBy: {title: QueryOrder.DESC },
    limit: 20,
  });
  return res.json(tasks);
}

export const getTask = async (req: Request, res: Response) => {
  try {
    const task = await DI.taskRepository.findOne(req.params.id as FilterQuery<TaskEntity>, {});
    if(!task) {
      return res.status(404).json({ message: 'Task does not exist' });
    }
    return res.status(200).json(task);
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
}

export const createTask = async (req: Request, res:Response) => {
  if(!req.body.title || !req.body.text) {
    return res.status(400).json({ message: 'Missing essential paramters' });
  }
  try {
    const task = DI.em.create(TaskEntity, req.body);
    await DI.taskRepository.persist(task).flush();
    return res.status(200).json(task);
  } catch(e: any) {
    return res.status(400).json({ message: e.message });
  }
}

export const updateTask = async (req: Request, res:Response) => {
  try {
    const task = await DI.taskRepository.findOne(req.params.id as FilterQuery<TaskEntity>, {});
    if(!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    await DI.taskRepository.flush();
    return res.status(200).json(task);
  } catch(e: any) {
    return res.status(400).json({ message: e.message});
  }
}
