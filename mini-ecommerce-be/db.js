const { Client } = require("pg");
require("dotenv").config();

const DB_URL = process.env.DATABASE_URL;
const pgClient = new Client(DB_URL);

pgClient.connect();

pgClient.query(`
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      price NUMERIC,
      description TEXT,
      image_url TEXT
    );
  `);

module.exports = { pgClient };
