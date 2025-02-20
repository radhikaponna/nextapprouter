import { Pool } from "pg";
//import { Pool } from "pg";: This imports
// the Pool class from the pg (node-postgres) module, which is used to interact with a PostgreSQL database.
import dotenv from "dotenv";
//import dotenv from "dotenv";: This imports the dotenv module,
// which loads environment variables from a .env file into process.env.
dotenv.config();
//This line loads the environment variables from a .env file into process.env.
//  This is useful for keeping sensitive information like database credentials out of your source code.

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT), // Ensuring it's a number
});
//const pool = new Pool({ ... });:
// This creates a new instance of the Pool class with the configuration options provided.
console.log({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

export default pool;
