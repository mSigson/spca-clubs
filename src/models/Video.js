import { Schema, connection, model } from "mongoose";
import ProjectRequirements from "./Project";

delete connection.models["Video"];

const VideoSchema = new Schema({
  ...ProjectRequirements,
  audience: String,
  video_link: String,
});

module.exports = model("Video", VideoSchema);
