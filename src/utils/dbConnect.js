import mongoose from "mongoose";
import User from "models/User";
import Club from "models/Club";

import Petition from "models/Petition";
import Letter from "models/Letter";
import Video from "models/Video";
import Display from "models/Display";
import Poster from "models/Poster";
import Fundraising from "models/Fundraising";

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
    Petition,
    Letter,
    Video,
    Display,
    Poster,
    Fundraising,
  };

  return connection.models;
};

export default dbConnect;
