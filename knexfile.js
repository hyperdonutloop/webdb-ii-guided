// Update with your config settings.

module.exports = {
  //teaches knex to connect to development db (sqLite3)
  development: {
    client: 'sqlite3',
    useNullAsDefault: true, // only needed when using sqlite3
    connection: {
      filename: './data/produce.db3' // where is the db file?
    },
    migrations: {
      directory: './data/migrations' // will be created automatically 
    },
    seeds: {
      directory: './data/seeds' // will be created automatically
    }
  },
};
