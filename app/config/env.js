

const env = {
  database: 'db21_200_reyescan',
  username: 'db21_200_reyescan_user',
  password: 'ilhN3VsmD5NLXy16pYlwV66kaWp8SVvr',
  host: 'dpg-ct0u98e8ii6s73fac9s0-a.oregon-postgres.render.com',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;