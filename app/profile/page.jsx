"use client";
import React, { useContext, useState } from "react";
import { Context } from "../Context/Context";
import ManageBlogCard from "../components/ManageBlogCard";
import ProfileDetails from "../components/ProfileDetails";
import Link from "next/link";
// import { redirect } from "next/navigation";

const Profile = () => {
  const { googleSingIn, handleSingOut, user } = useContext(Context);

  // protect route Auth system
  // const myUser = user.emailVerified;
  // if (!myUser) {
  //   redirect("/login");
  // }
  return (
    <div className='h-full '>
      <div className='container px-16 text-center'>
        {/* warper */}
        {user.emailVerified === true ? (
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
        ) : (
          <Link className='text-blue-800' href={"/login"}>
            {" "}
            please Login in at frist
          </Link>
        )}
      </div>
    </div>
  );
};

export default Profile;
