const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'DIRECCIÓN DE NUBE',
    user: 'USUARIO DE NUBE',
    password: 'CONTRASEÑA DE NUBE',
    database: 'NOMBRE DE BASE DE DATOS',
    port: 'PUERTO DE NUBE',
    connectTimeout: 30000,
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión: ', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

module.exports = connection;
