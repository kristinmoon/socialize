const router = require('express').Router();
const { getAllUser, getUserById, createUser, updateUser, deleteUser } = require('../../controllers/user-controller');

// GET all users and POST/create at /api/users
router
  .route('/users')
  .get(getAllUser)
  .post(createUser);

// GET one user by id, PUT/update a user, and DELETE a user at /api/users/:id
router
  .route('/users/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
