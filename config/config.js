require('dotenv').config()
module.exports = {
  development: {
    username: "cesar",
    password: "Druida78",
    database: "AniAPI_development",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: "cesar",
    password: null,
    database: "AniAPI_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    use_env_variable:'DATABASE_URL',
    database: 'AniAPI_production',
    dialect: "postgres"
  }
}

