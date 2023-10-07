import { Link } from "react-router-dom";


const CoffeesCart = ({ coffee, isLoading }) => {
    const { name, photo, price, details } = coffee;
    if (isLoading) {
        return <p>Loading</p>
    }
    return (
        <div className="col-4 mb-4 text-center">
            <div className="p-2 border-4">
                <img className="img-fluid" src={photo} alt="photo" />
                <h4>{name}</h4>
                <p>Price: {price}$</p>
                <p>{details}</p>
                <div className="d-flex justify-content-center gap-3">
                    <Link className="btn btn-primary">View</Link>
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeesCart;