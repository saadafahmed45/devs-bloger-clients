"use client";
import React, { useContext, useState } from "react";
import { Context } from "../Context/Context";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
const Login = () => {
  const { googleSingIn, handleSingOut, user } = useContext(Context);
  // emailVerified;

  const router = useRouter();

  if (user.emailVerified == true) {
    router.push("/addBlogPost"); // Redirecting to /cart route
  }
  return (
    <div className='h-96 md:h-screen flex justify-center items-center'>
      <div>
        {user.emailVerified === true ? (
          <button className='btn btn-outline ' onClick={handleSingOut}>
            <span className='text-3xl'>
              <FcGoogle />
            </span>
            Sign out
          </button>
        ) : (
          <button className='btn btn-outline ' onClick={googleSingIn}>
            <span className='text-3xl'>
              <FcGoogle />
            </span>
            Login with Google
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
