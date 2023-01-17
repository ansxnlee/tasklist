import 'reflect-metadata';
import http from "http";
import express from 'express';

import { EntityManager, EntityRepository, MikroORM, RequestContext } from "@mikro-orm/core"
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import mikroConfig from './mikro-orm.config';

import { TaskEntity } from './entities/TaskEntity';
import { TaskRouter } from './routes/TaskRouter';

// dependency injection to reuse the same mikroORM request instance
export const DI = {} as {
  server: http.Server;
  orm: MikroORM,
  em: EntityManager,
  taskRepository: EntityRepository<TaskEntity>,
};

// expressJS setup
export const app = express();
const PORT = process.env.PORT || 4000;

export const main = (async () => {
  // mikroORM setup
  DI.orm = await MikroORM.init<PostgreSqlDriver>(mikroConfig);
  DI.em = DI.orm.em
  DI.taskRepository = DI.orm.em.getRepository(TaskEntity);
  
  app.use(express.json());
  // forking mikroORM entity manager so their identity maps do not collide
  app.use((_req, _res, next) => {
    RequestContext.create(DI.orm.em, next);
  });

  app.use('/task', TaskRouter);
  app.use((_req, res) => res.status(404).json({ message: 'Route not found'}));

  DI.server = app.listen(PORT, () => {
    console.log(`express server started on localhost:${PORT}`)
  })
})();