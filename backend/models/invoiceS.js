const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Invoice = sequelize.define('Invoice', {
    alternatePayee1: {
        type: DataTypes.STRING,
    },
    alternatePayee2: {
        type: DataTypes.STRING,
    },
    city: {
        type: DataTypes.STRING,
      },
      street: {
        type: DataTypes.STRING,
      },
    country: {
      type: DataTypes.STRING,
    },
    bankKey: {
      type: DataTypes.STRING,
    },
    bankAccNo: {
      type: DataTypes.STRING,
    },
    reference: {
      type: DataTypes.STRING,
    },
    lineItems: {
      type: DataTypes.JSON,
    },
  },{
    timestamps: true,
});

sequelize.sync()
  .then(() => console.log('MySQL tables created'))
  .catch(err => console.log(err));

module.exports = { Invoice };
