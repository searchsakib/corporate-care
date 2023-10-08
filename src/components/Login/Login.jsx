import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  return (
    <div className="pt-[60px] pb-[76px] bg-gray-100">
      <div className="mx-auto w-5/12 min-w-fit ">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-base">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-medium text-base">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-blue-700 text-white hover:text-blue-700 hover:bg-blue-50 hover:border-2 hover:border-blue-700">
              Login
            </button>
          </div>
        </form>
        <div>
          <p className="text-center font-normal text-xl">Or</p>
          <p className="text-center font-normal text-xl">Login With</p>
          <Link>
            <FcGoogle className="w-fit mx-auto my-6" size={45}></FcGoogle>
          </Link>
        </div>
        <p className="font-medium text-center">
          Do not have an account{' '}
          <Link to="/register" className="font-semibold text-blue-500">
            Register
          </Link>{' '}
        </p>
      </div>
    </div>
  );
};

export default Login;
