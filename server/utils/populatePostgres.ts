import { MikroORM, EntityManager, EntityRepository, RequestContext } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TaskEntity } from '../entities/TaskEntity';
import mikroConfig from '../mikro-orm.config';

const DI = {} as {
  orm: MikroORM,
  em: EntityManager,
  taskRepo: EntityRepository<TaskEntity>,
}

/**
 * Simple script to populate task entity schema in postgres with dummy data
 * (data generated with blindtextgenerator.com)
 */
(async () => {
  DI.orm = await MikroORM.init<PostgreSqlDriver>(mikroConfig);
  DI.em = DI.orm.em.fork();;
  DI.taskRepo = DI.em.getRepository(TaskEntity);

  const res1 = DI.taskRepo.create({
    title: 'Sed ut perspici',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit '
          +'voluptatem accusantium doloremque laudantium, totam rem '
          +'aperiam, eaque ipsa quae ab illo inventore',
    createdAt: '0',
    updatedAt: '0',
  });
  await DI.taskRepo.persist(res1).flush();

  const res2 = DI.taskRepo.create({
    title: 'Pan',
    text: 'Lorem ipsum dol',
    createdAt: '0',
    updatedAt: '0',
  });
  await DI.taskRepo.persist(res2).flush();

  const res3 = DI.taskRepo.create({
    title: 'Passage',
    text: 'A wonderful serenity has taken possession of my entire soul, '
          +'like these sweet mornings of spring which I enjoy with my whole heart.',
    createdAt: '0',
    updatedAt: '0',
  });
  await DI.taskRepo.persist(res3).flush();

  const res4 = DI.taskRepo.create({
    title: 'Story',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia '
          +'and Consonantia, there live the blind texts.',
    createdAt: '0',
    updatedAt: '0',
  });
  await DI.taskRepo.persist(res4).flush();

  const res5 = DI.taskRepo.create({
    title: 'Lore',
    text: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un '
          +'myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.',
    createdAt: '0',
    updatedAt: '0',
  });
  await DI.taskRepo.persist(res5).flush();

  const res6 = DI.taskRepo.create({
    title: 'ASCII',
    text: 'abc def ghi jkl mno pqrs tuv wxyz ABC DEF GHI JKL MNO PQRS TUV WXYZ '
          +'!"§ $%& /() =?* \'<> #|; ²³~ @`´ ©«» ¤¼× {} abc',
    createdAt: '0',
    updatedAt: '0',
  });
  await DI.taskRepo.persist(res6).flush();

  const res7 = DI.taskRepo.create({
    title: 'End7',
    text: 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax '
          +'quiz prog. Junk MTV quiz graced by fox whelps.',
    createdAt: '0',
    updatedAt: '0',
  });
  await DI.taskRepo.persist(res7).flush();

  await DI.orm.close(true);
})();
