const { Schema, model, Types } = require('mongoose');

const validateEmail = function (email) {
  const re = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  return re.test(email)
};

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      require: 'Valid username is required',
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: 'Email address is required',
      validate: [validateEmail, 'Please add a valid email address'],
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please add a valid email address']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'Friend'
    }]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

// total count of friends
UserSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('User', UserSchema);


module.exports = User;

