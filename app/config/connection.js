// Dependencies
const Sequelize = require('sequelize');

// Creates mySQL connection using Sequelize
// Include your MySQL user/password information
const sequelize = new Sequelize('IDV_UAT', 'sa', 'sa#ASSB#200706', {      
      host: "53.129.42.23", //KAPl05\IDV_SQL2016_Test
        port: "52275 ", 
        dialect: "mssql",
        // operatorsAliases: false,
        'options.encrypt': false, 
        pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
        }
    });

// Exports the connection for other files to use
module.exports = sequelize;
