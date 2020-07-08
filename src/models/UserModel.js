const model = require('mongoose').model
const Schema = require('mongoose').Schema

const UserSchema = new Schema({

  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true
  },

})

module.exports = model('user', UserSchema)