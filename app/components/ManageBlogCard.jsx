import React from "react";
import ManageCard from "./ManageCard";

const ManageBlogCard = () => {
  return (
    <div>
      <div>
        {/* manage header */}
        <div>
          <h1 className='text-xl md:text-4xl'> Manage Blogs</h1>
        </div>
        {/* magane tab */}
        <div></div>
        <div>
          {/* card      */}
          <ManageCard />
        </div>
      </div>
    </div>
  );
};

export default ManageBlogCard;
