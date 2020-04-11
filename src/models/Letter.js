import { Schema, connection, model } from "mongoose";
import ProjectRequirements from "./Project";
import { countWords } from "utils/countWords";

delete connection.models["Letter"];

const LetterSchema = new Schema({
  ...ProjectRequirements,
  letter_recipient: String,
  description: {
    type: String,
    validate: {
      validator: (v) => countWords(v) <= 500,
      message: "Letter writing description must be less than 500 words",
    },
  },
  learning_outcome: {
    type: String,
    validate: {
      validator: (v) => countWords(v) <= 500,
      message: "Letter writing description must be less than 500 words",
    },
  },
});

module.exports = model("Letter", LetterSchema);
