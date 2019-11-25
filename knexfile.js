// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/node.db.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      filename: './data/migrations'
    },
    seeds: {
      filename: './data/seeds'
    }
  }

};
