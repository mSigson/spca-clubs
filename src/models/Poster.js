import { Schema, connection, model } from "mongoose";
import ProjectRequirements from "./Project";

delete connection.models["Poster"];

const PosterSchema = new Schema({
  ...ProjectRequirements,
  post_location: String,
  goal: String,
});

module.exports = model("Poster", PosterSchema);
