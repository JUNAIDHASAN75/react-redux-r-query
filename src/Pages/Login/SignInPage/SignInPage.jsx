import { Link } from "react-router-dom";

const SignInPage = () => {
    return (
        <div>
            <h2>this is sign in page</h2>
            <Link to='/signup'>SignUp</Link>
        </div>
    );
};

export default SignInPage;