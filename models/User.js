import mongoose from "mongoose";
import moment from "moment";

delete mongoose.connection.models["User"];

const UserSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: [true, "User_id is required"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  given_name: String,
  family_name: String,
  nickname: String,
  picture: {
    type: String,
  },
  locale: {
    type: String,
    default: "en",
  },
  created_at: {
    type: Date,
    required: [true, "Created is required"],
    default: moment.utc(),
  },
});

module.exports = mongoose.model("User", UserSchema);
