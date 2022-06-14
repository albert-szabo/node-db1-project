const router = require('express').Router()

router.get('/', (request, response, next) => {
  // DO YOUR MAGIC
});

router.get('/:id', (request, response, next) => {
  // DO YOUR MAGIC
});

router.post('/', (request, response, next) => {
  // DO YOUR MAGIC
});

router.put('/:id', (request, response, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (rerequestq, response, next) => {
  // DO YOUR MAGIC
});

router.use((error, request, response, next) => { // eslint-disable-line
  // DO YOUR MAGIC

  response.status(error.status || 500).json({
    message: error.message || 'An internal server error occurred.'
  });
});

module.exports = router;
