exports.up = knex => knex.schema
  .createTable('User', (table) => {
    table.increments('UserId');
    table.integer('ProvidersList_fk');
    table.specificType('Permissions', 'text[]').notNullable();
    table.string('Info').notNullable();
    table.timestamps(true, true);
  })
  .createTable('ProvidersList', (table) => {
    table.increments('ListId');
    table.integer('UserId_fk').nullable();
    table.foreign('UserId_fk').references('UserId').inTable('User');
    table.integer('GithubId_fk');
    table.integer('ManualId_fk');
    table.timestamps(true, true);
  })
  .table('User', (table) => {
    table.foreign('ProvidersList_fk').references('ListId').on('ProvidersList').onDelete('cascade');
  })
  .createTable('Github', (table) => {
    table.increments('GithubId');
    table.integer('UserId_fk');
    table.foreign('UserId_fk').references('UserId').on('User');
    table.specificType('Permissions', 'text[]');
    table.integer('GithubUserId').notNullable();
    table.string('AccessToken').notNullable();
    table.timestamps(true, true);
  })
  .createTable('Manual', (table) => {
    table.increments('ManualId');
    table.integer('UserId_fk');
    table.foreign('UserId_fk').references('UserId').on('User');
    table.string('UserEmail').notNullable();
    table.string('Password').notNullable();
    table.string('AccessToken').notNullable();
    table.timestamps(true, true);
  })
  .table('ProvidersList', (table) => {
    table.foreign('GithubId_fk').references('GithubId').on('Github').onDelete('cascade');
    table.foreign('ManualId_fk').references('ManualId').on('Manual').onDelete('cascade');
  });

exports.down = knex => knex.schema
  .table('ProvidersList', (table) => {
    table.dropForeign('GithubId_fk');
    table.dropForeign('ManualId_fk');
    table.dropForeign('UserId_fk');
  })
  .dropTable('Github')
  .dropTable('Manual')
  .dropTable('User')
  .dropTable('ProvidersList');
