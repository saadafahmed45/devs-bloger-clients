"use client";
import React, { useContext } from "react";
import { Context } from "../Context/Context";
import Link from "next/link";

const BookmarkList = ({ blog }) => {
  // const { handleBookMark, bookMarks } = useContext(Context);
  const {
    _id,
    title,
    description,
    imageLink,
    category,
    hashtag,
    author,
    createdAt,
  } = blog;
  return (
    <Link href={`blog/${_id}`}>
      <div>
        <div className="space-y-4 py-2  " key={blog._id}>
          <h2
            className="hover:underline decoration-solid
"
          >
            {blog.title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default BookmarkList;
