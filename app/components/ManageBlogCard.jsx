import React from "react";
import ManageCard from "./ManageCard";

const ManageBlogCard = () => {
  return (
    <div>
      <div>
        {/* manage header */}
        <div className='mb-16'>
          <h1 className='text-4xl'>Mohammad Haolader</h1>
        </div>
        {/* magane tab */}
        <div>
          {/* manag btn */}
          <div>
            <ul className='menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box'>
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          {/* card      */}
          <ManageCard />
        </div>
      </div>
    </div>
  );
};

export default ManageBlogCard;
