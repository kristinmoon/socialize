const { Schema, model, Types } = require('mongoose');


const FriendSchema = new Schema(
  {
    friendId: {
      type: Schema.Types.ObjectId,
      // default: () => new Types.ObjectId()
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Friend = model('Friend', FriendSchema);

module.exports = Friend;
