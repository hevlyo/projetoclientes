const { Sequelize } = require('sequelize');

const db = new Sequelize('postgres://postgres:postgres@localhost:5432/testeclientes');

module.exports = db;