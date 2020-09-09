import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

export default function share({ data }) {
  const router = useRouter();
  // const [url, setUrl] = useState("");

  // useEffect(() => {
  //   setUrl("https://thispersondoesnotexist.com/image");
  // }, []);

  return (
    <React.Fragment>
      <div>hello shareId: {router.query.shareId}</div>
      <img src={data.imageUrl} style={{ height: 200, width: 200 }} />
    </React.Fragment>
  );
}

export async function getServerSideProps({ query }) {
  // Fetch data from external API

  const shareId = query.shareId;
  const data = {
    imageUrl: `https://e313.blob.core.windows.net/c11b85ab-30ff-4fe0-6969-08d74b669207/0b6d3ca1-cc31-458d-55b9-08d83b121f3b`,
  };

  // await fetch(
  //   `https://jsonplaceholder.typicode.com/todos/${todoId}`
  // );
  //const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
