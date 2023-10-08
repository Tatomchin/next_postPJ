"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("title or description are require!");
      return;
    }
    const res = await fetch("http://localhost:3000/api/topics/route", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });
    if (!res.ok) {
      console.log("res no ok");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="contanier p-3">
      <form onSubmit={handleSubmit} action="">
        <div className="form-group">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            className="form-control mt-3"
            placeholder="Topic"
          />
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
            className="form-control mt-3"
            placeholder="Description"
          />
          <button type="submit" className="btn btn-success mt-4">
            Submit
          </button>
          <Link href={"/"}>
            <button className="btn btn-primary ms-1 mt-4">
              Back
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
