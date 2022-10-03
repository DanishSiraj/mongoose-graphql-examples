const {model, Schema, Types} = require('mongoose');


const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    username: {
    type: String,
    required: true,
    indexed: true
    },
    isActive: {
      type: Boolean,
      default: true,
    }
    ,
    posts:[{
    type: String,
    ref: "post",
    }]
    
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

const userModel = model('user', userSchema);
module.exports = userModel;