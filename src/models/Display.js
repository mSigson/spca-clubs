import { Schema, connection, model } from "mongoose";
import ProjectRequirements from "./Project";

delete connection.models["Display"];

const DisplaySchema = new Schema({
  ...ProjectRequirements,
});

module.exports = model("Display", DisplaySchema);
