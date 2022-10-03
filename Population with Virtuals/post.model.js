const {model, Schema} = require('mongoose');

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

const postModel = model('post', postSchema);
module.exports = postModel;
