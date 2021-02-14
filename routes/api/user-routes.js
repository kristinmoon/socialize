const router = require('express').Router();
const { getAllUser, getUserById, createUser, updateUser, deleteUser, addFriend, removeFriend } = require('../../controllers/user-controller');

// GET all users and POST/create at /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// GET one user by id, PUT/update a user, DELETE a user, and POST/create a friend at /api/users/:userId
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser)
  .post(addFriend);

// DELETE a friend at /api/users/:userId/friends/:friendId
router
  .route('/:userId/friends/:friendId')
  .delete(removeFriend);

module.exports = router;
