import { Schema } from "mongoose";
import moment from "moment";
import { countWords } from "utils/countWords";

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
    required: [true, "Project club is required"],
  },
  learning_outcome: {
    type: String,
    validate: {
      validator: (v) => countWords(v) <= 500,
      message: "Project learning outcomes must be less than 500 words",
    },
  },
  created_at: {
    type: Date,
    required: [true, "Created is required"],
    default: moment.utc(),
  },
};
