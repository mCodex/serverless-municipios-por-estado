import db from 'mongoose';
import dbHost from '../lib/connection';
import { getAllStates } from '../lib/mongoose';

db.Promise = require('bluebird');

exports.func = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const mongoState = db.connection.readyState;

  // Caso não haja nenhuma conexão, será necessário abrir uma
  if (mongoState === 0) {
    await db.connect(dbHost);
  }

  const states = await getAllStates();

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      status: 200,
      estados: states
    }),
  };

  callback(null, response);
};
