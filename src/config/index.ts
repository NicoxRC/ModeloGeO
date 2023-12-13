import dotenv from 'dotenv';
dotenv.config();

export = {
  PUBLIC_KEY_EPAYCO: process.env.PUBLIC_KEY_EPAYCO,
  PRIVATE_KEY_EPAYCO: process.env.PRIVATE_KEY_EPAYCO,
  PORT: process.env.PORT,
};
