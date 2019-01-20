exports.up = (knex) => {
  knex.schema.createTable('User', (table) => {
    table.increments('UserId');
    table.foreign('ProviderList').references('ListId').on('ProvidersList');
    table.specificType('Permissions', 'text[]');
    table.string('Info');
    table.timestamps();
  });
};

exports.down = (knex) => {
  knex.schema.dropTable('User');
};
