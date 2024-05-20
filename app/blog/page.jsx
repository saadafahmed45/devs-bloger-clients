import React from "react";
import blogApi from "../api/blogApi";
import BlogCard from "../components/BlogCard";

const BlogPost = async () => {
  const data = await blogApi();
  // console.log(data);
  return (
    <div className=''>
      {/* <h2>News{data.length}</h2> */}
      {data.splice(1, 6).map((data) => (
        <BlogCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default BlogPost;
