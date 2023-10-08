import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');

    signIn(email, password)
      .then((res) => {
        console.log(res.user);

        navigate(location?.state ? location.state : '/');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="pt-[60px] pb-[76px] bg-gray-100 overflow-x-hidden">
      <div className="mx-auto w-5/12 min-w-fit ">
        <h2 className="text-3xl font-medium my-5 text-center">Login Here</h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-base">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
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
              name="password"
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
          <div className=" rounded-full h-fit w-fit bg-white mx-auto my-6">
            <Link>
              <FcGoogle className="p-1" size={55}></FcGoogle>
            </Link>
          </div>
        </div>
        <p className="font-medium text-center text-2xl">
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
