const { Schema, model, Types } = require('mongoose');


const FriendSchema = new Schema(
  {
    // custom id to avoid confusion with parent user _id
    friendId: {
      type: Schema.Types.ObjectId,
      // default: () => new Types.ObjectId()
    },
    // user: [UserSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Friend = model('Friend', FriendSchema);

module.exports = Friend;
