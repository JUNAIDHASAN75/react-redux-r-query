import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignInPage = () => {
    const {register, handleSubmit,formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    return (
        <div className="w-50 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="my-3">
                    <label htmlFor="email">
                        <span className="h5">Email</span>
                    </label>
                    <input className="w-100 p-3 my-3 rounded-2 border-2 border-dark-subtle" type="email" placeholder="junaidullash@gmail.com" {...register('email',{required:true})} />
                    {errors.email && <p>Email is required</p>}
                </div>
                <div className="my-3">
                    <label htmlFor="email">
                        <span className="h5">Password</span>
                    </label>
                    <input className="w-100 p-3 my-3 rounded-2 border-2 border-dark-subtle" type="password" placeholder="Password" {...register('password', {required:true})} />
                    {errors.password && <p>password is required</p>}
                </div>
                <div className="my-3">
                    <input className="btn btn-primary w-100" type="submit" value="Login" />
                </div>
            </form>
            <div>
                <p>Don`t Have An Account? go to  <Link to='/signup'>SignUp</Link></p>
           
            </div>
        </div>
    );
};

export default SignInPage;