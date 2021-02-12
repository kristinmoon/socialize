const router = require('express').Router();
const { addThought, removeThought, addReaction, removeReaction, getThoughtById, getAllThought, updateThought } = require('../../controllers/thought-controller');

// GET all thoughts and POST/create at /api/thoughts
router
  .route('/thoughts')
  .get(getAllThought)
  .post(addThought);

// GET one thought by id, PUT/update a thought, and DELETE a thought at /api/thoughts/:thoughtId
router
  .route('/thoughts/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// POST/create a reaction at /api/thoughts/:thoughtId/reactions
router
  .route('/thoughts/:thoughtId/reactions')
  .post(addReaction);

// DELETE a reaction at /api/thoughts/:thoughtId/reactions/:reactionId
router
  .route('/thoughts/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;
