import {
  pgTable,
  serial,
  varchar,
  timestamp,
  integer,
  uuid,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const pages = pgTable('pages', {
  id: serial('id').primaryKey(),
  url: varchar('url', { length: 255 }).notNull(),
});

export const tabGroups = pgTable('tab_groups', {
  id: uuid().primaryKey().defaultRandom(), // Cambia serial a uuid
  name: varchar('name', { length: 255 }).notNull(),
  userId: integer('user_id')
    .references(() => users.id)
    .notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const tabGroupPages = pgTable('tab_group_pages', {
  id: serial('id').primaryKey(),
  tabGroupId: uuid('tab_group_id')
    .references(() => tabGroups.id)
    .notNull(),
  pageId: integer('page_id')
    .references(() => pages.id)
    .notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
