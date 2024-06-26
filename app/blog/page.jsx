import React from "react";
import blogApi from "../api/blogApi";
import BlogCard from "../components/BlogCard";
import Bookmarks from "../bookMarks/page";

const BlogPost = async () => {
  const data = await blogApi();

  // console.log(data);
  return (
    <div className=" h-full w-full  px-8  md:px-24 py-8 flex flex-col item-center justify-center md:flex-row md:justify-between gap-4">
      <div className="grid w-full md:w-[70%]  grid-cols-1">
        <h2 className="text-3xl">Blogs</h2>
        {data.map((data) => (
          <BlogCard key={data._id} data={data} />
        ))}
      </div>
      <div className="w-full h-1/2 md:w-[30%] ">
        <h2 className="text-2xl">BookMark blog </h2>
        <div>
          {/* <Bookmark /> */}
          <Bookmarks />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
