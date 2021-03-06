exports.up = (knex) => {
  knex.schema.createTable('Github', (table) => {
    table.increments('GithubId');
    table.foreign('UserId').references('UserId').on('User');
    table.specificType('Permissions', 'text[]');
    table.integer('GithubUserId');
    table.string('AccessToken');
    table.timestamps();
  });
};

exports.down = (knex) => {
  knex.schema.dropTable('Github');
};
