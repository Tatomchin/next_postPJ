import React from "react";
import { useRouter } from "next/navigation";

export default function RemoveTopic({ idTopic }) {
  const router = useRouter();
  const removeTopic = async () => {
    const comfirmed = confirm("Are you sure ?");
    if (comfirmed) {
      const res = await fetch(
        `http://localhost:3000/api/topics/route/?id=${idTopic}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) {
        console.log("res no ok");
      } else {
        router.refresh()
      }
    }
  };
  return (
    <div
      onClick={removeTopic}
      className="btn btn-danger mt-1 d-flex justify-content-center align-self-center"
    >
      <div>Delete</div>
    </div>
  );
}
