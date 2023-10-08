import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const { title, description } = await req.body;
  await connectMongoDB();
  await Topic.create({ title, description });
  return res.status(201).json({ message: "Topic created !" });
}

export async function GET(req, res) {
  await connectMongoDB();
  const topics = await Topic.find();
  return res.status(200).json({ topics });
}

export async function DELETE(req, res) {
  const id = await req.query.id;
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return res.status(200).json({ message: "Topic Delete !" });
}

export default async function handleData(req, res) {
  const { method } = req;
  console.log(method);
  switch (method) {
    case "POST":
      await POST(req, res);
      break;
    case "GET":
      await GET(req,res);
      break;
    case "DELETE":
      await DELETE(req, res);
      break;
    default:
  }
}
