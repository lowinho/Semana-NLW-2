import knex from 'knex';

export async function up(knex: knex) {
  return knex.schema.createTable('login_users', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').notNullable();
    table.string('password_hash').notNullable();
  })
}

export async function down(knex: knex) {
  return knex.schema.dropTable('login_users');
}