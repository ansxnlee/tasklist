import { Migration } from '@mikro-orm/migrations';

export class Migration20230116035309 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "base_entity" ("id" serial primary key, "created_at" jsonb not null, "updated_at" jsonb not null);');

    this.addSql('create table "task_entity" ("id" serial primary key, "created_at" jsonb not null, "updated_at" jsonb not null, "title" varchar(255) not null, "text" varchar(255) not null);');
  }

}
