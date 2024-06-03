// const blogApi = fetch("https://jsonplaceholder.typicode.com/posts");

import { dynamicBlogApi } from "./dynamicBlogApi";

async function blogApi() {
  const res = await fetch(dynamicBlogApi, {
    cache: "no-store",
  });

  return res.json();
}
export default blogApi;
