import mongoose, { Schema } from "mongoose";

const topicScheman = new Schema(
  {
    title: String,
    description: String,
  },
  { timestamps: true, }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicScheman);

export default Topic;
