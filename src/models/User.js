import { Schema, connection, model } from "mongoose";
import moment from "moment";

delete connection.models["User"];

const UserSchema = new Schema({
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
  email: String,
  picture: {
    type: String,
  },
  locale: {
    type: String,
    default: "en",
  },
  clubs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Club",
    },
  ],
  created_at: {
    type: Date,
    default: moment.utc(),
    required: [true, "Created is required"],
  },
});

module.exports = model("User", UserSchema);
