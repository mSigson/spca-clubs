import mongoose from "mongoose";
import User from "models/User";
import Club from "models/Club";

const connection = {};

const dbConnect = async () => {
  if (connection.isConnected) {
    return connection.models;
  }

  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true,
    keepAliveInitialDelay: 300000,
  });

  connection.isConnected = db.connections[0].readyState;
  connection.models = {
    User,
    Club,
  };

  return connection.models;
};

export default dbConnect;
