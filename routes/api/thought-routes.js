const router = require('express').Router();
const { addThought, removeThought, addReaction, removeReaction, getThoughtById, getAllThought, updateThought } = require('../../controllers/thought-controller');

// GET all thoughts and POST/create at /api/thoughts
router
  .route('/')
  .get(getAllThought);

// POST/create at /api/thoughts/:userId
router
  .route('/:userId')
  .post(addThought);

// GET one thought by id, PUT/update a thought, POST/create a reaction, and DELETE a thought at /api/thoughts/:thoughtId
router
  .route('/:userId/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought)
  .post(addReaction);

// DELETE a reaction at /api/thoughts/:thoughtId/:reactionId
router
  .route('/:userId/:thoughtId/:reactionId')
  .delete(removeReaction);

module.exports = router;
