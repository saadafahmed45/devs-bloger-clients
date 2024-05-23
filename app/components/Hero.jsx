import React from "react";

const Hero = () => {
  return (
    <div
      className='hero h-[60vh]  md:h-[80vh] lg:h-[90vh] '
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg)",
      }}>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-4xl'>
          <h1 className='mb-5 text-3xl md:text-5xl font-bold'>
            Exploring the World of Code: Tips, Tutorials, and Insights for
            Developers{" "}
          </h1>
          <p className='mb-5 text-md'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className='btn btn-primary'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
