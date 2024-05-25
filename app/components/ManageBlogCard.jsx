import React from "react";
import ManageCard from "./ManageCard";

const ManageBlogCard = () => {
  return (
    <div>
      <div>
        {/* manage header */}
        <div>
          <h1 className='text-xl md:text-4xl'> Manage Blogs</h1>
          {/* <h1 className='text-md md:text-2xl'> Mohammad Haolader</h1>
          <p className='text-sm md:text-xl'> mohammaghaolader1@gmail.com</p> */}
        </div>
        {/* magane tab */}
        <div>
          {/* card      */}
          <ManageCard />
        </div>
      </div>
    </div>
  );
};

export default ManageBlogCard;
