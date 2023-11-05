import React from 'react';
import Swal from 'sweetalert2'

const Addproduct = () => {

    const handleAddCar = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const carname = form.carname.value;
        const model = form.model.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        

        const newCar = { name, carname, model,price,description,rating,photo  }

        console.log(newCar);

        fetch('https://cars-server-2-ingvey2dq-omar-salehs-projects.vercel.app/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
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
        <div className="bg-gray-400 lg:p-24 p-4">
        <h2 className="text-3xl font-extrabold text-center mb-6">Add a Car</h2>
        <form onSubmit={handleAddCar}>
            {/* form name and quantity row */}
            <div className="md:flex mb-8">
                <div className="form-control flex items-center md:w-1/2">
                    <label className="label  text-center">
                        <span className="label-text my-2 text-lg  font-medium">Brand Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder="Brand Name" className="input input-bordered rounded-full bg-gray-200  w-full" />
                    </label>
                </div>
                <div className="form-control flex items-center md:w-1/2 lg:ml-4">
                    <label className="label">
                        <span className="label-text my-2 text-lg  font-medium">Car Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="carname" placeholder="Car Name" className="input  input-bordered bg-gray-200 w-full" />
                    </label>
                </div>
            </div>
            {/* form supplier row */}
            <div className="md:flex mb-8">
                <div className="form-control flex items-center md:w-1/2">
                    <label className="label">
                        <span className="label-text my-2 text-lg  font-medium">Model</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="model" placeholder="Model" className="input input-bordered bg-gray-200 w-full" />
                    </label>
                </div>
                <div className="form-control flex items-center md:w-1/2 lg:ml-4">
                    <label className="label">
                        <span className="label-text my-2 text-lg  font-medium">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="price" placeholder="price" className="input bg-gray-200 input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form category and details row */}
            <div className="md:flex mb-8">
                <div className="form-control flex items-center md:w-1/2">
                    <label className="label">
                        <span className="label-text my-2 text-lg  font-medium">Short description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description" placeholder="Short description" className="input bg-gray-200 input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control flex items-center md:w-1/2 lg:ml-4">
                    <label className="label">
                        <span className="label-text my-2 text-lg  font-medium">Rating</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="rating" placeholder="Rating" className="input bg-gray-200 input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form Photo url row */}
            <div className="mb-8">
                <div className="form-control flex items-center w-full">
                    <label className="label">
                        <span className="label-text my-2 text-lg  font-medium">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" placeholder="Photo URL" className="input bg-gray-200 input-bordered w-full" />
                    </label>
                </div>
            </div>
            <input type="submit" value="Add Car" className="btn bg-gray-600 border-0 text-white btn-block" />

        </form>
        </div>
    );
};

export default Addproduct;