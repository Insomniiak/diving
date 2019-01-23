exports.up = (knex) => {
  knex.schema.createTable('Manual', (table) => {
    table.increments('ManualId');
    table.foreign('UserId').references('UserId').on('User');
    table.string('UserEmail').notNullable();
    table.string('Password').notNullbable();
    table.string('AccessToken').notNullable();
    table.timestamps();
  });
};

exports.down = (knex) => {
  knex.schema.dropTable('Manual');
};
