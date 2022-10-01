const {model, Schema} = require('mongoose');

const commentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    post_id: {
      type: String,
      required: true,
    },
    creator_id: {
      type: String,
      required: true,
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

commentSchema.virtual('creator', {
  ref: 'user',
  foreignField: '_id',
  localField: 'creator_id',
  justOne: true,
});

commentSchema.virtual('post', {
  ref: 'post',
  foreignField: '_id',
  localField: 'post_id',
  justOne: true,
});

const commentModel = model('comment', commentSchema);

module.exports = commentModel;
