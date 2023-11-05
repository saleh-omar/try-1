import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CarCard from './CarCard';

const CarsCollction = () => {
    const cars=useLoaderData()
    console.log(cars)
    return (
       <div>

<div className="carousel w-full h-[500px] my-8">
  <div id="slide1" className="carousel-item relative h- w-full">
    <img src="https://i.ibb.co/41B3Qkv/guillermo-casales-p3-Mfa-q-Iab-I-unsplash.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/Pc0Vkt4/kevin-bonilla-YPfnv-Lc3bb-Q-unsplash.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/v3CPVrR/steven-binotto-9-VDuc-s-Gr-SI-unsplash.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
</div>
  
         <div className='grid lg:grid-cols-2 max-w-screen-lg mx-auto gap-[45px] '>
           
           {
                       cars?.map(category =><CarCard
                           key={category.id}
                           category={category}>
                           
                       </CarCard> )
                   }
       </div>
       </div>
    );
};

export default CarsCollction;