// imports/requires
const express = require('express');
const mysql = require('mysql2');

// server listening on PORT 9001, app initialized
const PORT = process.env.PORT || 9001;
const app = express();

// Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Connection to db established
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'P1g$oUnDSQL!',
        database: 'employees_db'
    },
    // logs connection to confirm connectivity 
    console.log(`Connected to employees_db`)
);

