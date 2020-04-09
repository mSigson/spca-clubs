import mongoose from "mongoose";
import moment from "moment";

delete mongoose.connection.models["Club"];

const ClubSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Club name is required"],
  },
  age_range: {
    min: {
      type: Number,
      required: [true, "Club have min member age"],
    },
    max: {
      type: Number,
      required: [true, "Club have max member age"],
    },
  },
  num_of_members: {
    type: Number,
    required: [true, "Club have number of members"],
  },
  advisors: {
    type: [String],
    required: [true, "Club must have at least 1 advisor"],
  },
  created_at: {
    type: Date,
    required: [true, "Created is required"],
    default: moment.utc(),
  },
});

module.exports = mongoose.model("Club", ClubSchema);
