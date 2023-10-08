import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
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
                Register
              </button>
            </div>
          </form>

          <p className="font-medium text-center">
            Already have an account{' '}
            <Link to="/login" className="font-semibold text-blue-500">
              Login
            </Link>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
