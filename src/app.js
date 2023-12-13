const express = require('express');
const database = require('../config/database.js');
const Cliente = require('./models/clientModel.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
