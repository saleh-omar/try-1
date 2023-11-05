import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const Mycart = () => {



  const selecetedCar=  useLoaderData()
  const [remainingCar, setremainingCar] = useState(selecetedCar);

  console.log(selecetedCar.length)


  const handleDelete = id => {

            console.log(id)

            fetch(`https://cars-server-2-ingvey2dq-omar-salehs-projects.vercel.app/cart/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted successfully');
                        // remove the user from the UI
                        const remainingUsers = remainingCar.filter(car => car._id !== id);
                        setremainingCar(remainingUsers);
                        Swal.fire({
                            title: 'Success!',
                            text: 'Car Deleted Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                          })
                    }
                })

  }


    return (
        <div className='my-6 bg-gray-400 lg:mx-8 mx-0'>
        
        <div className="overflow-x-auto max-w-6xl mx-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='text-xl'>
                        <th>No.</th>
                        <th>Cardname</th>
                        <th>Model</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        remainingCar.map((car, index) => <tr key={car._id}>
                            <th>{index+1}</th>
                            <td>{car.carname}</td>
                            <td>{car.model}</td>
                            <td>{car.price}</td>
                            <td>
                                <button
                                 onClick={() => handleDelete(car._id)}
                                     className="px-2 bg-gray-600 text-white rounded-lg py-2 ">X</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Mycart;