import { Schema } from "mongoose";
import moment from "moment";

export default {
  name: {
    type: String,
    required: [true, "Project name is required"],
  },
  animal_group: {
    type: String,
    required: [true, "Project animal group is required"],
  },
  animal_issue: {
    type: String,
    required: [true, "Project animal issue is required"],
  },
  type: {
    type: String,
    required: [true, "Project type is required"],
  },
  club: {
    type: Schema.Types.ObjectId,
    ref: "Club",
  },
  created_at: {
    type: Date,
    required: [true, "Created is required"],
    default: moment.utc(),
  },
};
