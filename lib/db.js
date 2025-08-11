import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: 'localhost',
  user: 'root', // або твій користувач MySQL
  password: 'stas123stas123321', // твій пароль
  database: 'mysite',
});
