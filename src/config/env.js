import dotenv from 'dotenv';

// loading .env
dotenv.config();

export const { NODE_ENV, PORT, DBURL, HOST_NAME } = process.env;
