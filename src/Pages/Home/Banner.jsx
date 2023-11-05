import React from 'react';

const Banner = () => {
    return (
        <div>
        <div className="hero min-h-screen " style={{backgroundImage: 'url(https://i.ibb.co/Qrnq8w2/dan-gold-x-BRQf-R2bq-NI-unsplash.jpg)'}}>
<div className="hero-overlay bg-opacity-60"></div>
<div className="hero-content text-center text-neutral-content relative">
<div className="">
  <h1 className="mb-5 text-5xl font-bold">Your Car Shopping Journey Begins Here</h1>
  <p className="mb-5 text-xl italic">Your one-stop destination for all things automotive. Explore, compare, and find your perfect ride on our car shop website</p>
  <button className="select-none rounded-lg bg-gray-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" data-ripple-light="true">
  Get started
</button>
</div>
</div>
</div>




    </div>

    );
};

export default Banner;