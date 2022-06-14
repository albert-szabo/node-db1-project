const router = require('express').Router()

const Accounts = require('./accounts-model');

const { checkAccountPayload, checkAccountNameUnique, checkAccountId } = require('./accounts-middleware');

router.get('/', async (request, response, next) => {
  try {
    const accounts = await Accounts.getAll();
    response.json(accounts);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', checkAccountId, (request, response, next) => {
  response.json(request.account);
});

router.post('/', checkAccountPayload, checkAccountNameUnique, async (request, response, next) => {
  try {
    const newAccount = await Accounts.create(request.body);
    response.status(201).json(newAccount);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', checkAccountId, checkAccountPayload, checkAccountNameUnique, (request, response, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', checkAccountId, (rerequestq, response, next) => {
  // DO YOUR MAGIC
});

router.use((error, request, response, next) => {
  response.status(error.status || 500).json({
    message: error.message || 'An internal server error occurred.'
  });
});

module.exports = router;
