"use client";
import React, { useContext } from "react";
import { Context } from "../Context/Context";

const ProfileDetails = () => {
  const { googleSingIn, user } = useContext(Context);

  return (
    <div cla>
   
        {/* profile img  */}
        <div className='avatar text-center'>
          <div className='w-24 rounded-full'>
            <img src={user.photoURL} />
          </div>
        </div>
    
      {/* profile content  */}

      <div >
        <h2 className="text-2xl"> {user.displayName}</h2>
        <h3>email: {user.email}</h3>
      </div>
    </div>
  );
};

export default ProfileDetails;
