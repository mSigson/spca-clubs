import mongoose from 'mongoose'
import moment from 'moment';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add name'],
  },
  created: {
    type: Date,
    default: moment.utc()
  }
})

module.exports = UserSchema;