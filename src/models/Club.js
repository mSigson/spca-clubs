import { Schema, connection, model } from "mongoose";
import moment from "moment";

delete connection.models["Club"];

const ClubSchema = new Schema({
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
  avatar: {
    type: String,
    required: [true, "Club must have an avatar"],
  },
  advisors: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  projects: {
    petitions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Petition",
        default: [],
      },
    ],
    letters: [
      {
        type: Schema.Types.ObjectId,
        ref: "Letter",
        default: [],
      },
    ],
    videos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
        default: [],
      },
    ],
    displays: [
      {
        type: Schema.Types.ObjectId,
        ref: "Display",
        default: [],
      },
    ],
    posters: [
      {
        type: Schema.Types.ObjectId,
        ref: "Poster",
        default: [],
      },
    ],
    fundraising: [
      {
        type: Schema.Types.ObjectId,
        ref: "Fundraising",
        default: [],
      },
    ],
  },
  created_at: {
    type: Date,
    required: [true, "Created is required"],
    default: moment.utc(),
  },
});

module.exports = model("Club", ClubSchema);
