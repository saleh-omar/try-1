import React from 'react';

const Section2 = () => {
    return (
        <div className='max-w-6xl mx-auto mb-20 px-4 lg:px-0  'data-aos="zoom-in-up"  data-aos-duration="3000">
            <h1 className='text-center text-4xl font-bold my-10'>About Us</h1>
            <div className="relative flex w-full lg:flex-row flex-col rounded-xl bg-gray-100 bg-clip-border text-gray-700 shadow-md">
               <div className="relative m-0 lg:w-[50%] lg:h-[515px] shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img src="https://i.ibb.co/v3CPVrR/steven-binotto-9-VDuc-s-Gr-SI-unsplash.jpg" alt="image" className="h-full w-full object-cover" />
               </div>
  <div className="px-6">
    
    <h4 className="mb-2 mt-6 block font-sans lg:text-6xl text-3xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
    Our Car <br /> Shop's Story
    </h4>
    <p className="mb-4 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased my-6">
    Get acquainted with our passionate team and learn about our commitment to providing exceptional service and quality vehicles. Discover what drives us in the world of automotive excellence.We're a dedicated team of enthusiasts who share a common goal: helping you find the perfect vehicle while ensuring an unparalleled customer experience.
    </p>
    <p className='font-semibold italic ml-4 text-xl mb-4'>
    "Where dreams meet the road, and every journey begins with a key turn. Explore the essence of automotive excellence with us."
    </p>
    <a className="inline-block" href="#">
    <button className="select-none rounded-lg mb-6 bg-gray-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" data-ripple-light="true">
      Read More
    </button>
    </a>
  </div>
</div>

        </div>
    );
};

export default Section2;