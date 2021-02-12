const router = require('express').Router();
const { getAllUser, getUserById, createUser, updateUser, deleteUser, addFriend, removeFriend } = require('../../controllers/user-controller');

// GET all users and POST/create at /api/users
router
  .route('/users')
  .get(getAllUser)
  .post(createUser);

// GET one user by id, PUT/update a user, and DELETE a user at /api/users/:userId
router
  .route('/users/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// POST/create a friend at /api/users/:userId/friends
router
  .route('/users/:userId/friends')
  .post(addFriend)

// DELETE a friend at /api/users/:userId/friends/:friendId
router
  .route('/users/:userId/friends/:friendId')
  .delete(removeFriend);

module.exports = router;
