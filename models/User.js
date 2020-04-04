import mongoose from "mongoose";
import moment from "moment";

delete mongoose.connection.models["User"];

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  created: {
    type: Date,
    required: [true, "Created is required"],
    default: moment.utc(),
  },
});

module.exports = mongoose.model("User", UserSchema);
