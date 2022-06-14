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

router.put('/:id', checkAccountId, checkAccountPayload, async (request, response, next) => {
  try {
    const updatedAccount = await Accounts.updateById(request.params.id, request.body);
    response.json(updatedAccount);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', checkAccountId, async (request, response, next) => {
  try {
    await Accounts.deleteById(request.params.id);
    response.json(request.account);
  } catch (error) {
    next(error);
  }
});

router.use((error, request, response, next) => {
  response.status(error.status || 500).json({
    message: error.message || 'An internal server error occurred.'
  });
});

module.exports = router;
