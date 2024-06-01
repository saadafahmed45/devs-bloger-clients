"use client";
import React, { useContext, useState } from "react";
import { Context } from "../Context/Context";
import ManageBlogCard from "../components/ManageBlogCard";
import ProfileDetails from "../components/ProfileDetails";
import { redirect } from "next/navigation";

const Profile = () => {
  const { googleSingIn, handleSingOut, user } = useContext(Context);

  // protect route Auth system
  const myUser = user.emailVerified;
  if (!myUser) {
    redirect("/login");
  }
  return (
    <div className=' '>
      <div className='container px-16'>
        {/* warper */}
        <div className='flex '>
          {/* left manage  */}
          <div>
            <ManageBlogCard />
          </div>
          {/* right profile  */}
          <div>
            <ProfileDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
