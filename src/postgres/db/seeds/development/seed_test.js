exports.seed = (knex, Promise) => Promise.join(
  knex('table_name').del(),
  knex('table_name').insert([
    { id: 1, colName: 'rowValue1' },
    { id: 2, colName: 'rowValue2' },
    { id: 3, colName: 'rowValue3' },
  ]),
);
