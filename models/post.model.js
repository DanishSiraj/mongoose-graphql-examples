const {model, Schema} = require('mongoose');
// const {connections} = require("../utils/connections.js");

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    status: {
      type: String,
      enum: ['CREATED', 'DRAFT', 'PUBLISHED'],
      required: true,
    },
    author_id: {
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

postSchema.virtual('author', {
  ref: 'user',
  foreignField: '_id',
  localField: 'author_id',
  justOne: true,
});

postSchema.virtual('comments', {
  ref: 'comment',
  foreignField: 'post_id',
  localField: '_id',
});

const postModel = model('post', postSchema);
module.exports = postModel;
