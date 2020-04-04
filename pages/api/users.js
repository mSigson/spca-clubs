import mongoose from 'mongoose';
import mongoMiddleware from '../../utils/mongo-middleware';
import apiHandler from '../../utils/apiHandler';

import UserSchema from '../../models/User';
const User = mongoose.model('user', UserSchema);

export default mongoMiddleware(async (req, res) => {
  const {
    method
  } = req

  apiHandler(res, method, {
    GET: (response) => {
      User.find({}, (error, user) => {
        if (error) {
          response.status(500).json({ error });
        } else {
          response.status(200).json(user);
        }
      })
    }
  });
})