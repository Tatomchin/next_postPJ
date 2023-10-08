"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import rout from "next/router";
import { useRouter } from "next/navigation";

export default function EditTopic() {
  const router = rout.useRouter();
  const routerTo = useRouter();
  let [topicObj, setTopic] = useState(null);
  let [newTitle, setnewTitle] = useState("");
  let [newDescription, setNewDescription] = useState("");

  const id = router.query.id;

  useEffect(() => {
    let isMounted = true;
    if (id) {
      const fetchData = async () => {
        const res = await fetch(
          `http://localhost:3000/api/topics/routeEdit/${id}`,
          {
            method: "GET",
            cache: "no-store",
          }
        );

        if (!res.ok) {
          console.log("res no ok editTopic!");
        } else {
          const data = await res.json();
          if (data) {
            if (isMounted) {
              setTopic(data);
            }
          } else {
            console.log("no data");
          }
        }
      };
      fetchData();
    }
    return () => {
      if (id) {
        isMounted = false;
      }
    };
  }, [id]);

  useEffect(() => {
    if (topicObj) {
      let topic = topicObj.topic;
      let { title, description } = topic;
      setnewTitle(title);
      setNewDescription(description);
    }
  }, [topicObj]);

  const handleUpdateTopic = async (e) => {
    e.preventDefault();
    if (!newTitle || !newDescription) {
      alert("title or description are require!");
      return;
    }
    const res = await fetch(
      `http://localhost:3000/api/topics/routeEdit/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newTitle, newDescription }),
      }
    );
    if (!res.ok) {
      console.log("res no ok");
    } else {
      routerTo.push("/");
    }
  };

  return (
    <>
      {!topicObj ? (
        <p>Loading...</p>
      ) : (
        <div className="contanier p-3">
          <form onSubmit={handleUpdateTopic}>
            <div className="form-group">
              <input
                type="text"
                className="form-control mt-3"
                placeholder="Topic"
                onChange={(e) => setnewTitle(e.target.value)}
                value={newTitle}
              />
              <input
                type="text"
                className="form-control mt-3"
                placeholder="Description"
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
              />
              <button type="submit" className="btn btn-success mt-4">
                Update
              </button>
              <Link href={"/"}>
                <button type="" className="btn btn-primary ms-1 mt-4">
                  Back
                </button>
              </Link>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
