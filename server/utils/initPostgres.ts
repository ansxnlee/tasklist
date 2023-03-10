import { MikroORM } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import mikroConfig from '../mikro-orm.config';

/**
 * Simple script to snapshot and migrate our entities to a fresh instance of postgres
 */
(async () => {
  const orm = await MikroORM.init<PostgreSqlDriver>(mikroConfig);
  const migrator = orm.getMigrator();
  await migrator.createInitialMigration();
  await migrator.up();
  await orm.close(true);
})();
