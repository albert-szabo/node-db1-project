const Accounts = require('./accounts-model');

exports.checkAccountPayload = (request, response, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
};

exports.checkAccountNameUnique = (request, response, next) => {
  // DO YOUR MAGIC
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
