import { Schema, connection, model } from "mongoose";
import ProjectRequirements from "./Project";

delete connection.models["Fundraising"];

const FundraisingSchema = new Schema({
  ...ProjectRequirements,
  raised: Number,
  method: String,
});

module.exports = model("Fundraising", FundraisingSchema);
