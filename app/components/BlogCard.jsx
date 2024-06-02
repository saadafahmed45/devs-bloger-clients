import Link from "next/link";
import React from "react";
import { BiSolidBookmark } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

const BlogCard = ({ data }) => {
  const {
    _id,
    title,
    description,
    imageLink,
    category,
    hashtag,
    author,
    createdAt,
  } = data;

  return (
    <div className='border-b-2 border-inherit shadow-lg	shadow-slate-200 m-2 p-2  md:m-8  hover:shadow-slate-300  hover:shadow-xl  rounded-md'>
      {/* card warper */}
      <div className=' flex justify-between flex-col md:flex-row p-2 items-center '>
        {/* blog content box     */}
        <div className='w-[100%] md:w-[60%] flex flex-col  order-1 '>
          {/* user info */}
          <div className='flex flex-col md:flex-row gap-4 '>
            <h4 className='text-sm md:text-md'>{author}</h4>
            <span className='text-sm md:text-md text-slate-500'>
              {createdAt}
            </span>
          </div>
          <h2 className='text-lg  font-semibold my-2'>{title}</h2>
          <p className='text-sm md:text-md'>{description}</p>
          {/* card tagg  */}
          <div className=' mt-8 md:mt-14 flex justify-between gap-4 flex-col md:flex-row'>
            <div className='flex gap-4 text-sm md:text-md p-1'>
              <h3 className='bg-orange-100  rounded-lg '>{hashtag} </h3>
              <span>10 min read </span>
            </div>

            <div className='flex gap-4 justify-between text-3xl  '>
              <button className=''>
                {" "}
                <BiSolidBookmark />{" "}
              </button>
              <button>
                {" "}
                <BsThreeDots />{" "}
              </button>
            </div>
          </div>
        </div>
        {/* blog image     */}

        <Link href={`blog/${_id}`} className='order-1  w-full md:w-1/3  p-2 '>
          <img className='rounded' src={imageLink} alt='' />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
