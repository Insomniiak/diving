exports.up = (knex) => {
  knex.schema.createTable('ProvidersList', (table) => {
    table.increments('ListId');
    table.foreign('UserId').references('UserId').on('User');
    table.foreign('GithubId').references('GithubId').on('Github');
    table.foreign('ManualId').references('ManualId').on('Manual');
    table.timestamps();
  });
};

exports.down = (knex) => {
  knex.schema.dropTable('ProvidersList');
};
