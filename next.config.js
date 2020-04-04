const dotEnvResult = require('dotenv').config({path: __dirname + '/.env.build'});

const dev = process.env.NODE_ENV === 'development';

if (dev && dotEnvResult.error) {
  throw dotEnvResult.error
}

module.exports = {
  env: {
    MONGO_URI: process.env.MONGO_URI,
    API_URL: dev ? "http://localhost:3000" : process.env.API_URL,
  }
}
