import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { useContext } from 'react';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name, photo, email, password);

    createUser(email, password, name, photo)
      .then((result) => {
        console.log(result.user);
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => console.log('profile updated'))
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="overflow-x-hidden">
      <div className="pt-[60px] pb-[76px] bg-gray-100">
        <div className="mx-auto w-5/12 min-w-fit ">
          <h2 className="text-3xl font-medium my-5 text-center">
            Register Here
          </h2>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-base">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-base">
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
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
