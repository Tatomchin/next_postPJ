import React from "react";

export default function Posttest({ results }) {
  
  return (
    <div>
      <h1>Test getServerSideProps</h1>
      <p>{JSON.stringify(results)}</p>
      {/* {query.map((q, index) => (
        <div key={index}>
            <h3>{q.id} = {q.title}</h3>
            <p>{q.body}</p>
        </div>
      ))} */}
    </div>
  );
}

export async function getServerSideProps() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/?q=${context.params.query}`);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const json = await res.json();
  const posts = json;
  console.log(posts)
  return {
    props: {
      results: posts,
    },
  };
}
