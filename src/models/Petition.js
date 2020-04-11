import { Schema, connection, model } from "mongoose";
import ProjectRequirements from "./Project";

delete connection.models["Petition"];

const PetitionSchema = new Schema({
  ...ProjectRequirements,
  petition_title: {
    type: String,
    required: [true, "Petition title is required"],
  },
  num_of_signatures: {
    type: Number,
    required: [true, "Petition number of signatures is required"],
  },
  description: {
    type: String,
    required: [true, "Petition description is required"],
  },
});

module.exports = model("Petition", PetitionSchema);
