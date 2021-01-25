import { Pool } from "pg";
import consola from "consola";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on("error", (err) => consola.error(err));

export default pool;
