import Link from "next/link";
import { useEffect, useState } from "react";
import RemoveTopic from "./RemoveTopic";

export default function TopicList() {
  let [topicsObj, setTopicsObj] = useState(null);
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/topics/route", {
        method: "GET",
      });

      if (!res.ok) {
        console.log("res no ok");
      } else {
        const data = await res.json();
        if (data) {
          if (isMounted) {
            setTopicsObj(data);
          }
        } else {
          console.log("no data");
        }
      }
    };
    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {!topicsObj ? (
        <p>Loading...</p>
      ) : (
        topicsObj.topics.map((t) => (
          <div
            className="container d-flex justify-content-between border p-3 mt-1"
            key={t._id}
          >
            <div className="">
              <h3>{t.title}</h3>
              <p>{t.description}</p>
            </div>
            <div className="d-block">
              <Link
                className="btn btn-primary mt-1 d-flex justify-content-center align-self-center"
                href={`/editTopic?id=${t._id}`}
              >
                <div>Edit</div>
              </Link>
              <RemoveTopic idTopic={t._id}/>
            </div>
          </div>
        ))
      )}
    </>
  );
}
