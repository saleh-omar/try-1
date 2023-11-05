import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const Cars = ({ category }) => {
  const { id, name, logo, coverImage } = category;

 

  return (
 <div>

  <div className=" lg:w-[412px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
 
   <div className=' bottom-10'>
  
   
   <div>
      {id ? ( // Check if 'id' is available
        <Link to={`oneType/${name}`}>
          <a className="group shadow-xl relative block">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
              <img className="w-full h-full absolute top-0 left-0 object-cover" src={coverImage} alt={name} />
            </div>
            <div className="absolute top-0 inset-x-0 z-10">
              <div className="p-4 flex flex-col h-full sm:p-6">
                {/* Avatar */}
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-[2.875rem] w-[2.875rem] rounded-full"
                      src={logo}
                      alt={`${name} Image Description`}
                    />
                  </div>
                  <div className="ml-2.5 sm:ml-4">
                    <h4 className="font-semibold text-white text-lg">{name}</h4>
                  </div>
                </div>
                {/* End Avatar */}
              </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 z-10">
              <div className="flex flex-col h-full p-4 sm:p-6">{/* Add your content here */}</div>
            </div>
          </a>
        </Link>
      ) :
       (
        <Link to="/"> 
        <a className="group shadow-xl relative block">
        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
          <img className="w-full h-full absolute top-0 left-0 object-cover" src={coverImage} alt={name} />
        </div>
        <div className="absolute top-0 inset-x-0 z-10">
          <div className="p-4 flex flex-col h-full sm:p-6">
            {/* Avatar */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-[2.875rem] w-[2.875rem] rounded-full"
                  src={logo}
                  alt={`${name} Image Description`}
                />
              </div>
              <div className="ml-2.5 sm:ml-4">
                <h4 className="font-semibold text-white text-lg">{name}</h4>
              </div>
            </div>
            {/* End Avatar */}
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 z-10">
          <div className="flex flex-col h-full p-4 sm:p-6">{/* Add your content here */}</div>
        </div>
      </a>
      
      </Link>


      )}
    </div>
   </div>
   
   
 </div>

  
</div>

  );
};

export default Cars;
