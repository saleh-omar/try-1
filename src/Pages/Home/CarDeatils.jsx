import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const CarDeatils = () => {



    const car=useLoaderData()
    const{_id,name,model,carname,photo,rating,price,  description  }=car

    const newCart={carname,model,price}
const handleAddCart= ()=>{


    fetch('https://cars-server-2-ingvey2dq-omar-salehs-projects.vercel.app/cart', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newCart)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Car Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

}

   

    
    return (
        <div className="relative flex w-full max-w-[58rem] mx-auto flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative w-3/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
    <img src={photo} alt="image" className="object-cover w-full h-full" />
  </div>
  <div className="p-6 relative">
   
   
    <p className="block mt-8 mb-16 font-sans text-base font-semibold antialiased leading-relaxed text-gray-700">
      {description}
    </p>
    <a className="inline-block" href="#">
      <button  onClick={() => handleAddCart()} className="absolute bottom-8 flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-white text-center  uppercase align-middle transition-all rounded-lg select-none bg-gray-600 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Add to Cart
        
      </button>
    </a>
  </div>
</div>

    );
};

export default CarDeatils;