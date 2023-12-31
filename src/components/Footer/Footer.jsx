import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  const links = (
    <>
      <li className="md:pr-12 lg:pr-12 pb-2 md:pb-0 lg:pb-0">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-white outline font-bold p-2'
              : 'text-blue-50'
          }
        >
          Home
        </NavLink>
      </li>

      <li className=" pb-2 md:pb-0 lg:pb-0">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-white outline p-2  font-bold'
              : 'text-blue-50'
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <footer className="flex flex-col md:px-10 lg:px-10 xl:px-0 items-center justify-between  max-w-[1320px] mx-auto">
      <div>
        <Link>
          <h2 className="font-bold text-blue-50 text-2xl font-serif">
            Corporate <span className="text-blue-800 bg-blue-50">Care</span>{' '}
          </h2>
        </Link>
      </div>
      <div className="text-center mt-8 mb-8 ">
        <ul className=" md:flex lg:flex text-lg">{links}</ul>
      </div>
      <div>
        <p>
          <small className="text-blue-50">© Corporate Care 2023</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
