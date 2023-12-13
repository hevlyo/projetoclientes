const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'testeclientes',
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ' + err.message);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados!');
  }
});

module.exports = connection;