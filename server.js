// imports/requires
const express = require('express');
const mysql = require('mysql2');

// server listening on PORT 9001, app initialized
const PORT = process.env.PORT || 9001;
const app = express();

// Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());