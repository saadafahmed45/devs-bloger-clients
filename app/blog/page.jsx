import React from "react";
import blogApi from "../api/blogApi";
import BlogCard from "../components/BlogCard";

const BlogPost = async () => {
  const data = await blogApi();


  console.log(data);
  return (
    <div className=' h-full  px-8  md:px-24 py-8'>
      <h2>News :{data.length}</h2>
      <div className='grid grid-cols-1 '>
        {data.map((data) => (
          <BlogCard key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
