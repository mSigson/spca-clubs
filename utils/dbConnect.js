import mongoose from 'mongoose';
import UserSchema from '../models/User';

const User = mongoose.model('user', UserSchema);

const connection = {};

async function dbConnect () {
  if (connection.isConnected) {
    return connection.models;
  }

  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
  connection.models = {
    User
  };

  return connection.models;
}

export default dbConnect;