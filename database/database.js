const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', '826479', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;