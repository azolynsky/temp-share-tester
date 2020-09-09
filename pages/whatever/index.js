import Component from "../../components/whatever/Component";
import React from "react";

export default function whatever({ data }) {
  return (
    <div>
      hello new page <Component title={data.title} />
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
