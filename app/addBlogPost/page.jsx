"use client";
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { dynamicBlogApi } from "../api/dynamicBlogApi";
import { Context } from "../Context/Context";
import { redirect } from "next/navigation";

const AddBlogPost = () => {
  const { googleSingIn, user } = useContext(Context);

  // protect route Auth system
  const myUser = user.emailVerified;
  if (!myUser) {
    redirect("/login");
  }
  // state manegmant
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageLink: "",
    category: "",
    hashtag: "",
    author: user.displayName,
    authorEmail: user.email,
    authorPhoto: user.photoURL,
    createdAt: new Date().toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    // Add more fields as needed
  });

  //  funtion for state magane data

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // post data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(dynamicBlogApi, {
        // mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      // Handle response accordingly
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    console.log(formData);
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });
    // formData.reset();
    setTimeout(function () {
      location.reload(1);
    }, 3000);
  };

  return (
    <div className=''>
      <div>
        <section className='text-gray-600 body-font relative  '>
          <div className='container px-4 py-16 mx-auto '>
            <div className='flex flex-col text-center w-full mb-1 '>
              <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900'>
                Add Blog
              </h1>
            </div>
            <form
              onSubmit={handleSubmit}
              className='lg:w-1/2 md:w-2/3 mx-auto   shadow-md rounded-xl	shadow-slate-300 p-8'>
              <div className='flex flex-wrap m-2'>
                <div className='p-2 w-full'>
                  <div className='relative'>
                    <label className='leading-7 text-sm text-gray-600'>
                      Title
                    </label>
                    <input
                      onChange={handleChange}
                      type='text'
                      id='title'
                      name='title'
                      value={formData.name}
                      required
                      placeholder='type your title'
                      className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    />
                  </div>
                </div>
                <div className='p-2 w-full'>
                  <div className='relative'>
                    <label className='leading-7 text-sm text-gray-600'>
                      Descriptipon
                    </label>
                    <textarea
                      onChange={handleChange}
                      type='text'
                      id='description'
                      name='description'
                      placeholder='type your Descriptipon'
                      className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    />
                  </div>
                </div>
                <div className='p-2 w-full'>
                  <div className='relative'>
                    <label className='leading-7 text-sm text-gray-600'>
                      Image Link
                    </label>
                    <input
                      onChange={handleChange}
                      type='text'
                      id='imageLink'
                      name='imageLink'
                      placeholder='type your image Link'
                      className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    />
                  </div>
                </div>

                <div className='p-2 w-full'>
                  <div className='relative'>
                    <label className='leading-7 text-sm text-gray-600'>
                      Athor Name
                    </label>
                    <input
                      onChange={handleChange}
                      type='text'
                      id='author'
                      name='author'
                      placeholder={user.displayName}
                      className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    />
                  </div>
                </div>

                <div className='p-2 w-full md:w-1/2 '>
                  <div className='relative'>
                    <label className='leading-7 text-sm text-gray-600'>
                      Hashtag
                    </label>
                    <input
                      onChange={handleChange}
                      type='text'
                      id='hashtag'
                      name='hashtag'
                      placeholder='type your hashtag'
                      className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    />
                  </div>
                </div>
                {/* Cetegory */}

                <div className='p-2  w-full md:w-1/2'>
                  <div className='relative'>
                    <label className='leading-7 text-sm text-gray-600'>
                      Category
                    </label>
                    <input
                      onChange={handleChange}
                      type='text'
                      id='category'
                      name='category'
                      placeholder='type your category'
                      className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    />
                  </div>
                </div>
                {/* button  */}
                <div className='p-2 w-full'>
                  <button
                    type='submit'
                    className='flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg'>
                    Add Blog
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddBlogPost;
