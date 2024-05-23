// const blogApi = fetch("https://jsonplaceholder.typicode.com/posts");

async function blogApi() {
  const res = await fetch("http://localhost:7000/blog", {
    cache: "no-store",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default blogApi;
