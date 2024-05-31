"use client";
import React, { useContext } from "react";
import { Context } from "../Context/Context";

const ProfileDetails = () => {
  const { googleSingIn, user } = useContext(Context);

  return (
    <div>
      <button className='btn btn-primary ' onClick={googleSingIn}>
        Login
      </button>
      <h3>user: {user.displayName}</h3>
      <h3>email: {user.email}</h3>
    </div>
  );
};

export default ProfileDetails;
