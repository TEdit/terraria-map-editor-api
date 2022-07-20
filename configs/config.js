const path = require("path");
const secrets = require("./secrets.js");

const serverRootDir = path.resolve(__dirname, "..");
const env = process.env.NODE_ENV || "development";

module.exports = {
    db: {
        host: secrets.dbHost,
        user: secrets.dbUser,
        password: secrets.dbPass,
        database: secrets.dbName,
        port: secrets.dbPort,
    },
    port: 3000,
    contentDir: path.join(serverRootDir, "/content"),
    env,
    serverRootDir,
    secrets
};
