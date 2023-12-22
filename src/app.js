const express = require('express');
const cors = require('cors');
const database = require('../config/database.js');
const clientRoutes = require('./routes/clientRoutes.js');
const productRoutes = require('./routes/productRoutes.js');

const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors('*'));

database.authenticate()
    .then(() =>
        console.log('Conexão bem-sucedida ao banco de dados!'))
    .catch((err) =>
        console.error('Erro ao conectar ao banco de dados: ' + err.message));

 // Sincronizar o modelo com o banco de dados
database.sync()
    .then(() =>
        console.log('Tabelas criadas com sucesso!'))
    .catch((err) =>
        console.error('Erro ao criar tabelas: ' + err.message));

app.use('/api', clientRoutes);
app.use('/api', productRoutes);

app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port);
});