const {model, Schema} = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.virtual('posts', {
  ref: 'post',
  foreignField: 'author_id',
  localField: '_id',
});


const userModel = model('user', userSchema);
module.exports = userModel;
