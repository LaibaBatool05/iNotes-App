const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
    // unique: true,
  },
  password:{
    type: String,
    required: true,
  },
  date:{
    type: Date,
    default: Date.now,
  }
});
const Users = mongoose.model('users', UsersSchema);
Users.createIndexes();
module.exports = Users;