exports.up = (knex) => {
  knex.schema.createTable('Manual', (table) => {
    table.increments('ManualId');
    table.foreign('UserId').references('UserId').on('User');
    table.string('UserEmail');
    table.string('Password');
    table.string('AccessToken');
    table.timestamps();
  });
};

exports.down = (knex) => {
  knex.schema.dropTable('Manual');
};
