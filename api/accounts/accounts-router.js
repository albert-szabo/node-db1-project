const router = require('express').Router()

const { checkAccountPayload, checkAccountNameUnique, checkAccountId } = require('./accounts-middleware');

router.get('/', (request, response, next) => {
  // DO YOUR MAGIC
});

router.get('/:id', checkAccountId, (request, response, next) => {
  // DO YOUR MAGIC
});

router.post('/', checkAccountPayload, checkAccountNameUnique, (request, response, next) => {
  // DO YOUR MAGIC
});

router.put('/:id', checkAccountId, checkAccountPayload, checkAccountNameUnique, (request, response, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', checkAccountId, (rerequestq, response, next) => {
  // DO YOUR MAGIC
});

router.use((error, request, response, next) => { // eslint-disable-line
  // DO YOUR MAGIC

  response.status(error.status || 500).json({
    message: error.message || 'An internal server error occurred.'
  });
});

module.exports = router;
