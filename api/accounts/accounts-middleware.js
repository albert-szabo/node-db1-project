const Accounts = require('./accounts-model');

const database = require('../../data/db-config');

exports.checkAccountPayload = (request, response, next) => {
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)

  const { name, budget} = request.body;
  if (name === undefined || budget === undefined) {
    next({ status: 400, message: 'name and budget are required' });
  } else if (name.trim().length < 3 || name.trim().length > 100) {
    next({ status: 400, message: 'name of account must be between 3 and 100' });
  } else if (typeof budget !== 'number' || isNaN(budget)) {
    next({ status: 400, message: 'budget of account must be a number' });
  } else if (budget < 0 || budget > 1000000) {
    next({ status: 400, message: 'budget of account is too large or too small' });
  } else {
    request.body.name = name.trim();
    next();
  }
};

exports.checkAccountNameUnique = async (request, response, next) => {
  try {
    const existingAccount = await database('accounts').where('name', request.body.name.trim()).first();
    if (existingAccount) {
      next({ status: 400, message: 'that name is taken' });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

exports.checkAccountId = async (request, response, next) => {
  try {
    const account = await Accounts.getById(request.params.id);
    if (!account) {
      next({ status: 404, message: 'account not found.' });
    } else {
      request.account = account;
      next();
    }
  } catch (error) {
    next(error);
  }
};
