const SingleBlog = async ({ params }) => {
  const id = params.id;

  const res = await fetch(`https://devs-bloger-server.onrender.com/blog/${id}`);
  const data = await res.json();
  console.log(data.title);
  const {
    _id,
    title,
    description,
    imageLink,
    category,
    hashtag,
    author,
    authorPhoto,
    authorEmail,
  } = data;

  return (
    <div className="w-full flex items-center justify-center  min-h-screen">
      <div className="container px-6 md:py-8 md:px-24  flex items-center justify-center">
        {/* blog content */}
        <div className="space-y-4 max-w-2xl mx-auto">
          {/* head */}
          <div className="space-y-3 ">
            {/* title */}
            <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
            {/* Category */}
            <h3 className="text-md text-slate-600">{description}</h3>
          </div>
          {/* profile details */}
          <div className="flex gap-8 mt-4 ">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={authorPhoto} />
              </div>
            </div>
            <div>
              <h4 className="text-md">{author}</h4>
              <h4 className="text-slate-600 text-sm">5 min Read </h4>
            </div>
            <div>
              <button className="text-green-500"> follow</button>
              <h4 className="text-slate-600 text-sm"> May 14, 2024</h4>
            </div>
          </div>
          {/* group btn */}
          <div className="space-x-3 mt-2 ">
            <button className="border border-gray-200 text-sm py-1 px-3 rounded-2xl border-solid">
              <span> </span> listen
            </button>
            <button className="border border-gray-200 text-sm py-1 px-3 rounded-2xl border-solid">
              Share
            </button>
            <button className="border border-gray-200 text-sm py-1 px-3 rounded-2xl border-solid">
              More
            </button>
          </div>
          {/* blog img */}
          <div className="w-full flex justify-center">
            <img
              className="w-[700px] h-[300px] object-cover"
              src={imageLink}
              alt={title}
            />
          </div>
          {/* description */}
          <div className="w-full ">
            <p className="text-md">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
