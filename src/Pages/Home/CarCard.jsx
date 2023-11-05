import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({category}) => {
    const{_id,name,model,carname,photo,rating,price,    }=category
    

    return (
        <div class="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
            <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-60 rounded-xl bg-clip-border">
                <img className='h-full w-full'
                    src={photo}/>
                            
             </div>

            <div class="p-6">

            <div class="flex items-center justify-between mb-2">
                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    Car Name
                    </p>
                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                      {carname}
                    </p>
                </div>
                <h1 className='text-center font-bold'>{name}</h1>

                <div class="flex items-center justify-between mb-2">
                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    Price
                    </p>
                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                      {price}
                    </p>
                </div>

                <h1 className='text-center font-bold'>{model}</h1>

                <div class="flex items-center justify-between mb-2">
                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    Rating
                    </p>
                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                      {rating}
                    </p>
                </div>
                   
            </div>


            <div class="p-6 pt-0">
              <Link to={`/oneType/${name}/${_id}`}>
              <button
                        class="block w-full text-white select-none rounded-lg bg-gray-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button">
    
                    Deatails
                </button>
              </Link>
              <Link to={`/updat/${_id}`}>
                <button
                        class="block my-4 w-full select-none rounded-lg bg-gray-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button">
    
                        Update 
                </button>
                </Link>
  </div>
        </div>
    );
};

export default CarCard;