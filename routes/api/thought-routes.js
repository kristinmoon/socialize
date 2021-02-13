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

// GET one thought by id, PUT/update a thought, and DELETE a thought at /api/thoughts/:thoughtId
router
  .route('/:userId/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought)
  .put(addReaction);

// // POST/create a reaction at /api/thoughts/:thoughtId/reactions
// router
//   .route('/:userId/:thoughtId/reactions')

// DELETE a reaction at /api/thoughts/:thoughtId/reactions/:reactionId
router
  .route('/:userId/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;
