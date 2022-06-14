const database = require('../../data/db-config');

const getAll = () => {
  return database('accounts');
}

const getById = id => {
  return database('accounts').where('id', id).first();
}

const create = account => {
  // DO YOUR MAGIC
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
