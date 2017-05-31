const knex = require('knex');

module.exports = function () {
  const app = this;
  const { client, connection } = app.get('db');
  const db = knex({ client, connection });

  app.set('db_connection', db);
};
