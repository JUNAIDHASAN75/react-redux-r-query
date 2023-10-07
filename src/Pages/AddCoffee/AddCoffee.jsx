import { useForm } from "react-hook-form";
import {  useGetApiQuery, usePostApiMutation } from "../../features/slices/apis/apiSlice";


const AddCoffee = () => {
    const { register, handleSubmit} = useForm();
    const {data} = useGetApiQuery()
    console.log(data)
    const [postApi, {data:coffees}] = usePostApiMutation()
    console.log(coffees)
    const onSubmit = data =>{
        postApi(data)
         console.log(data)
        };
    return (
        <div>
            <h2>Add Coffee</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="photo " className="my-2">
                        <span className="h5">Name</span>
                    </label>
                    <input type="text"className="p-3 rounded-1 border-2 w-100" {...register('name')} placeholder="Pame" />
                </div>
                <div>
                    <label htmlFor="photo " className="my-2">
                        <span className="h5">Price</span>
                    </label>
                    <input type="text"className="p-3 rounded-1 border-2 w-100" {...register('price')} placeholder="Price" />
                </div>
                <div>
                    <label htmlFor="photo " className="my-2">
                        <span className="h5">Photo</span>
                    </label>
                    <input type="text"className="p-3 rounded-1 border-2 w-100" {...register('photo')} placeholder="PhotoURL" />
                </div>
                <div>
                    <label htmlFor="photo " className="my-2">
                        <span className="h5">Details</span>
                    </label>
                    <input type="text"className="p-3 rounded-1 border-2 w-100" {...register('details')} placeholder="Details" />
                </div>
                <div className="my-4">
                    <input className="btn btn-primary" type="submit" value="Add Coffee" />
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;