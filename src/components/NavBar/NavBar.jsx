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
              ? 'text-[#2D5FDA] underline font-bold'
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
              ? 'text-[#2D5FDA] underline font-bold'
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
              ? 'text-[#2D5FDA] underline font-bold'
              : ''
          }
        >
          Login
        </NavLink>
      </li>

      <li className="md:pr-12 lg:pr-12 pb-2 md:pb-0 lg:pb-0">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#2D5FDA] underline font-bold'
              : ''
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/faqs"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#2D5FDA] underline font-bold'
              : ''
          }
        >
          FAQs
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex flex-col md:flex-row lg:flex-row  md:px-10 lg:px-10 xl:px-0 items-center justify-between max-w-[1320px] mx-auto">
      <div>
        <Link>
          <h2 className="font-bold text-blue-800 text-2xl font-serif">
            Corporate <span className="text-white bg-blue-800">Care</span>{' '}
          </h2>
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
