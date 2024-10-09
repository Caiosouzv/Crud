// configurando o Sequelize
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sqlite:./bd/cadastro.db');

module.exports = sequelize;
