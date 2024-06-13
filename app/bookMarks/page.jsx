"use client";
import React, { useContext } from "react";
import { Context } from "../Context/Context";
import BookmarkList from "../components/BookmarkList";

const Bookmarks = () => {
  const { handleBookMark, bookMarks } = useContext(Context);

  return (
    <div className="bg-slate-200 p-2 ">
      {bookMarks.map((blog) => (
        <BookmarkList blog={blog} key={blog._id} />
      ))}
    </div>
  );
};

export default Bookmarks;
