import { Link } from "react-router-dom";
import { useGetApiQuery } from "../../../features/slices/apis/apiSlice";
import CoffeesCart from "./CoffeeCart/CoffeesCart";

const Coffees = () => {
    const { data: coffees, isLoading } = useGetApiQuery();
    console.log(coffees)
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <Link to='/addcoffee' className="btn btn-primary">Add New Coffee</Link>
                <h2>Total coffees: {coffees?.length}</h2>
            </div>

            <div className="row w-100 mx-auto ">

                {
                    coffees?.map(coffee => <CoffeesCart
                        key={coffee._id}
                        coffee={coffee}
                        isLoading={isLoading}
                    ></CoffeesCart>)
                }
            </div>
        </div>
    );
};

export default Coffees;