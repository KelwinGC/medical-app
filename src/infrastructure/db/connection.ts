import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

let pool: mysql.Pool;

export const getPool = (): mysql.Pool => {
  if (!pool) {
    // Validar y asegurar valores obligatorios
    const {
      DB_HOST,
      DB_USER,
      DB_PASS,
      DB_NAME,
      DB_CONN_LIMIT
    } = process.env;
    
    console.log('DB_HOST:', DB_HOST);
    console.log('DB_USER:', DB_USER);
    console.log('DB_NAME:', DB_NAME);

    if (!DB_HOST || !DB_USER || !DB_NAME) {
      throw new Error('Faltan variables de entorno para la conexión MySQL');
    }

    pool = mysql.createPool({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASS ?? '',
      database: DB_NAME,
      waitForConnections: true,
      connectionLimit: Number(DB_CONN_LIMIT ?? 10),
      queueLimit: 0,
    } as mysql.PoolOptions); // <--- Cast explícito para TypeScript estricto
  }

  return pool;
};
