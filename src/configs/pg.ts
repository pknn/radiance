import { Pool } from 'pg';
import consola from 'consola';

const pool = new Pool({
  connectionString: process.env.NODE_ENV === 'test' ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL,
});

pool.on('error', (err) => consola.error(err));

export default pool;
