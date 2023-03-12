import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import logger from 'morgan';
import helmet from 'helmet';

// const express = require('express');
// const exppressAsyncErrors = require('express-async-errors');
// const path = require('path');
// const cors = require(cors);
// const logger = require('morgan');

const app = express();
const router = express.Router();

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//default route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Zillox',
  });
});

export default app;
// module.exports = app;
