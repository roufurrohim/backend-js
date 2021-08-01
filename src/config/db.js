/* eslint-disable no-console */
const mysql = require('mysql2');
const { DB_USERNAME, DB_PASSWORD } = require('../helpers/env');

const db = mysql.createConnection({
  host: '',
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: 'db_coffee_shop',
});

db.connect((err) => {
  if (err) {
    console.log('connection failed');
  } else {
    console.log('Connection Success');
  }
});

module.exports = db;
