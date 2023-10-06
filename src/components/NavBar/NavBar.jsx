import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = (
    <>
      <li className="md:pr-12 lg:pr-12 pb-2 md:pb-0 lg:pb-0">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#FF444A] underline font-bold'
              : ''
          }
        >
          Home
        </NavLink>
      </li>

      <li className="md:pr-12 lg:pr-12 pb-2 md:pb-0 lg:pb-0">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#FF444A] underline font-bold'
              : ''
          }
        >
          About Us
        </NavLink>
      </li>

      <li className="md:pr-12 lg:pr-12 pb-2 md:pb-0 lg:pb-0">
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#FF444A] underline font-bold'
              : ''
          }
        >
          Login
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/bookings"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#FF444A] underline font-bold'
              : ''
          }
        >
          Bookings
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex flex-col md:flex-row lg:flex-row  md:px-10 lg:px-10 xl:px-0 items-center justify-between mt-12 mb-5 max-w-[1320px] mx-auto">
      <div>
        <Link>
          <img src="/images/logo.png" alt="" />
        </Link>
      </div>
      <div className="text-center mt-9 md:mt-0 lg:mt-0 ">
        <ul className=" md:flex lg:flex text-lg">{links}</ul>
      </div>
      <div>
        <p>User</p>
      </div>
    </div>
  );
};

export default NavBar;
