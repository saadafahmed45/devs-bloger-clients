// const blogApi = fetch("https://jsonplaceholder.typicode.com/posts");

import { dynamicBlogApi } from "./dynamicBlogApi";

async function blogApi() {
  const res = await fetch(dynamicBlogApi, {
    cache: "no-store",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default blogApi;
