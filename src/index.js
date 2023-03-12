import app from './setup/express.js';
import logging from './setup/logging.js';
import database from './setup/database.js';

// logging();
database();

export default app;
// module.exports = app;
