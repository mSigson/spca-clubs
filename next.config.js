const dotEnvResult = require('dotenv').config()

const dev = process.env.NODE_ENV === 'development'

if (dotEnvResult.error) {
  throw dotEnvResult.error
}

module.exports = {
  env: {
    MONGO_URI: "mongodb+srv://m-sigson:EzHjK58ac8RTlt15@cluster0-omzgj.mongodb.net/spca-clubs-db?retryWrites=true&w=majority",
    API_URL: dev ? "http://localhost:3000" : "http://spca-clubs.now.sh",
  }
}
