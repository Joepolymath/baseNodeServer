import mongoose from 'mongoose';
// import winston from 'winston/lib/winston/config';
import Bluebird from 'bluebird';
import { DBURL } from '../config/env.js';
import chalk from 'chalk';

const database = () => {
  let db;

  mongoose.Promise = Bluebird;

  const options = {
    useNewUrlParser: true,
    socketTimeoutMS: 0,
    keepAlive: true,
  };

  mongoose.connect(DBURL, options);
  db = mongoose.connection;
  db.on('error', (err) => {
    console.error(chalk.bold.red('Error connecting to database.'), err);
  });
  db.once('connected', () => {
    console.log(chalk.bold.green('Database Connection is Successful'));
  });
  db.once('disconnected', () => {
    console.info(chalk.bold.yellow('Database Disconnected'));
  });

  process.on('SIGINT', () => {
    mongoose.connection.close((err) => {
      console.info(
        chalk.bold.yellowBright(
          'Database Connection Closed Due to App Termination'
        )
      );
      process.exit(err ? 1 : 0);
    });
  });
};

export default database;
