import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service,aosAnimation }) => {
  const { id, image, title, short_desc, price } = service || {};

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  // I have to add this to div: data-aos="fade-up"

  return (
    <div className="card bg-base-100 shadow-xl" data-aos={aosAnimation}>
      <figure>
        <img src={image} alt="pics" />
      </figure>
      <div className="card-body text-center bg-blue-50">
        <h2 className="card-title mx-auto font-bold"> {title} </h2>
        <p className="mt-2"> {short_desc} </p>
        <p className="font-semibold text-lg">Booking Price: {price} </p>
        <div className="card-actions justify-center mt-2">
          <Link to={`/service-details/${id}`}>
            <button className="btn bg-blue-700 text-white hover:text-blue-700 hover:bg-blue-50 hover:border-2 hover:border-blue-700">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
