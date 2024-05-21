import React from "react";
import blogApi from "../api/blogApi";
import BlogCard from "../components/BlogCard";

const BlogPost = async () => {
  const data = await blogApi();
  // console.log(data);
  return (
    <div className=' h-full '>
      {/* <h2>News{data.length}</h2> */}
      <div className="flex md:flex-col item-center justify-center">
          {data.splice(1, 6).map((data) => (
        <BlogCard key={data.id} data={data} />
      ))}
    </div>
    </div>
  );
};

export default BlogPost;
