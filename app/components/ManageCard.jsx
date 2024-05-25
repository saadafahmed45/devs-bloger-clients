"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiSolidBookmark } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { dynamicBlogApi } from "../api/dynamicBlogApi";
import Swal from "sweetalert2";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

const ManageCard = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch(dynamicBlogApi)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  console.log(blog);

  // delete product

  const handleDelete = (_id) => {
    console.log("dlt", _id);

    fetch(`https://devs-bloger-server.onrender.com/blog/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
          setTimeout(function () {
            location.reload(1);
          }, 3000);
        }
      });
  };

  return (
    <div className=''>
      {blog.map(
        ({ _id, title, description, imageLink, category, hashtag, author }) => (
          <div
            key={_id}
            className='border-b-2 border-inherit shadow-lg	shadow-slate-200 m-2  md:m-8  hover:shadow-slate-300  hover:shadow-xl cursor-pointer'>
            {/* card warper */}
            <div className=' flex justify-between flex-col md:flex-row p-2 items-center '>
              {/* blog content box     */}
              <div className='w-[100%] md:w-[60%] flex flex-col  order-2 '>
                {/* user info */}
                {/* <div className='flex flex-col md:flex-row gap-4 '>
                  <h4 className='text-sm md:text-md'>
                    Julien Etienne Julien Etienne
                  </h4>
                  <span className='text-sm md:text-md text-slate-500'>
                    Dec 22, 2023
                  </span>
                </div> */}
                <h2 className='text-lg  font-semibold my-2'>{title}</h2>
                <p className='text-sm md:text-md'>{description}</p>
                {/* card tagg  */}
                <div className=' mt-8 md:mt-14 flex justify-between gap-4 flex-col md:flex-row'>
                  <div className='flex gap-4 text-sm md:text-md p-1'>
                    <h3 className='bg-orange-100  rounded-lg '>{hashtag} </h3>
                    <span>10 min read </span>
                  </div>

                  <div className='flex gap-4 justify-between text-3xl  '>
                    <div className='tooltip' data-tip='Update'>
                      <Link href={`profile/${_id}`} className=''>
                        {" "}
                        <FaEdit />{" "}
                      </Link>
                    </div>

                    <div className='tooltip' data-tip='Delete'>
                      <button onClick={() => handleDelete(_id)}>
                        {" "}
                        <MdDeleteOutline />{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* blog image     */}
              <div className='order-1  w-full md:w-1/3 '>
                <img src={imageLink} alt={imageLink} />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ManageCard;