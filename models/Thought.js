const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

// reactions
const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      require: true,
      maxLength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => moment(createdAtVal).format("MMM DD YYYY")
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      require: true,
      minLength: 1,
      maxLength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => moment(createdAtVal).format("MMM DD YYYY")
    },
    username:
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    reactions: [ReactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

// total count of reactions
ThoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
