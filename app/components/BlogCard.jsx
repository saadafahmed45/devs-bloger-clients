import React from "react";
import { BiSolidBookmark } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

const BlogCard = ({ data }) => {
  const { id, title ,body} = data;

  return (
    <div className='border-b-2 border-inherit shadow-lg	shadow-slate-200 m-8  '>
      {/* card warper */}
      <div className='flex justify-between p-8 items-center '>
        {/* blog content box     */}
        <div className='w-[60%]  '>
          {/* user info */}
          <div className='flex gap-4'>
            <h4 className='text-sm'>Julien Etienne Julien Etienne</h4>
            <span className='text-slate-500'>Dec 22, 2023</span>
          </div>
          <h2 className='text-xl font-semibold my-2'>{title}</h2>
          <p>{body}</p>
          {/* card tagg  */}
          <div className='mt-14 flex justify-between gap-4'>
            <div className='flex gap-4'>
              <h3>Programming </h3>
              <span>10 min read </span>
            </div>

            <div className='flex gap-4 text-3xl'>
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
        <div className='w-1/2'>
          <img
            src='https://miro.medium.com/v2/resize:fit:1100/format:webp/0*8PuClELl1cRbarRH.png'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
