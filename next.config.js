const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

const dotEnvResult = require("dotenv").config({
  path: __dirname + "/.env.build",
});

const dev = process.env.NODE_ENV === "development";

if (dev && dotEnvResult.error) {
  throw dotEnvResult.error;
}

module.exports = withCSS(
  withSass({
    env: {
      MONGO_URI: process.env.MONGO_URI,
      API_URL: dev ? "http://localhost:3000" : process.env.API_URL,
      AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
      AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
      AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
      AUTH0_SCOPE: "openid email profile",
      REDIRECT_URI:
        process.env.REDIRECT_URI || "http://localhost:3000/api/callback",
      POST_LOGOUT_REDIRECT_URI:
        process.env.POST_LOGOUT_REDIRECT_URI ||
        "http://localhost:3000/dashboard",
      SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
      SESSION_COOKIE_LIFETIME: 7200,
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
          },
        },
      });

      return config;
    },
  })
);
