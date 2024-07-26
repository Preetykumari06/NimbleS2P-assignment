const mongoose = require('mongoose');
const { Sequelize } = require('sequelize');
require('dotenv').config()

// MongoDB configuration
const mongoURI = process.env.mongodb_uri;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected')).catch(err => console.log(err));

// MySQL configuration with Sequelize
const sequelize = new Sequelize(process.env.mySQL_uri, {
    host: process.env.host,
    port: process.env.sql_PORT,
    dialect: 'mysql',
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = { mongoose, sequelize };


