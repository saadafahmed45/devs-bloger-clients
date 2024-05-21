"use client";
import React, { useState } from "react";

const AddBlogPost = () => {
  // state manegmant
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageLink: "",
    category: "",
    hashtag: "",
    author: "",
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
      const response = await fetch("http://localhost:7000/blog", {
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

    // formData.reset();
    // location.reload();
  };

  return (
    <div className=''>
      <div>
        <section className='text-gray-600 body-font relative'>
          <div className='container px-5 py-10 mx-auto'>
            <div className='flex flex-col text-center w-full mb-12'>
              <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
                Add Blog
              </h1>
            </div>
            <form onSubmit={handleSubmit} className='lg:w-1/2 md:w-2/3 mx-auto'>
              <div className='flex flex-wrap -m-2'>
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
                      type='email'
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
                      placeholder='type your author'
                      className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    />
                  </div>
                </div>

                <div className='p-2 w-1/2'>
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

                <div className='p-2 w-1/2'>
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

                <div className='p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center'>
                  <a className='text-blue-500'>example@email.com</a>

                  <span className='inline-flex'>
                    <a className='text-gray-500'>
                      <svg
                        fill='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'>
                        <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                      </svg>
                    </a>
                    <a className='ml-4 text-gray-500'>
                      <svg
                        fill='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'>
                        <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                      </svg>
                    </a>
                    <a className='ml-4 text-gray-500'>
                      <svg
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'>
                        <rect
                          width='20'
                          height='20'
                          x='2'
                          y='2'
                          rx='5'
                          ry='5'></rect>
                        <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
                      </svg>
                    </a>
                    <a className='ml-4 text-gray-500'>
                      <svg
                        fill='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'>
                        <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                      </svg>
                    </a>
                  </span>
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
