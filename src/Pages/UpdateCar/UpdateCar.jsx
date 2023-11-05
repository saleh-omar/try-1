import React from 'react';
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCar = () => {

    const uddateCar = useLoaderData();
    const{_id,name,model,carname,photo,rating,price,  description  }=uddateCar

    const handleAddCar = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const carname = form.carname.value;
        const model = form.model.value;
        const price = form.price.value;
        // const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        

        const newCar = { name, carname, model,price,rating,photo  }

        console.log(newCar);


        fetch(`https://cars-server-2-ingvey2dq-omar-salehs-projects.vercel.app/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

       

      
    }

    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold">Update a Car</h2>
        <form onSubmit={handleAddCar}>
            {/* form name and quantity row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" defaultValue={name} placeholder="Brand Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Car Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="carname" defaultValue={carname} placeholder="Car Name" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form supplier row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Model</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="model" defaultValue={model}  placeholder="Model" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="price" defaultValue={price}  placeholder="price" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form category and details row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                    <input type="text" name="rating" defaultValue={rating}  placeholder="Rating" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                    </label>
                </div> */}
            </div>
            {/* form Photo url row */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" defaultValue={photo}  placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <input type="submit" value="Update" className="btn btn-block" />

        </form>
        </div>
    );
};

export default UpdateCar;