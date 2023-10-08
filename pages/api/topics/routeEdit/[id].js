import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import React from "react";

export default async function editData(req, res) {
  const id = await req.query.id;
  if (req.method === "PUT") {
    const { newTitle: title, newDescription: description } = await req.body;
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id, { title, description });
    return res.status(200).json({ message: "Topic Update !" });
  } else if (req.method === "GET") {
    await connectMongoDB();
    const topic = await Topic.findOne({ _id: id });
    return res.status(200).json({ topic });
  } else{
  }
}
