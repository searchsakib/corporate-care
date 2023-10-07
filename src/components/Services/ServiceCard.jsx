import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ServiceCard = ({ service }) => {
  const { id, image, title, short_desc, price } = service || {};

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  // I have to add this to div: data-aos="fade-up"

  return (
    <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-up">
      <figure>
        <img src={image} alt="pics" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {title} </h2>
        <p> {short_desc} </p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
