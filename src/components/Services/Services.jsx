import { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const [myService, setMyService] = useState([]);
  useEffect(() => {
    fetch('/events.json')
      .then((res) => res.json())
      .then((data) => setMyService(data));
  }, []);
  // console.log(myService);
  const eachAosAnimation = [
    'fade-right',
    'zoom-out-up',
    'fade-left',
    'fade-right',
    'zoom-out-up',
    'fade-left'
  ]

  return (
    <div className="max-w-[1320px] mx-auto">
      <div className="text-center mb-12 p-2 md:p-0 lg:p-0">
        <h2 className="text-5xl font-semibold m-5">Our Services</h2>
        <p className="md:px-32 lg:px-32">
          At Corporate Care Events, we've got you covered. We collaborate
          closely with local vendors to craft enjoyable, distinctive, and
          innovative events customized precisely to suit your organization's
          requirements.{' '}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 px-6 md:px-10 lg:px-0 ">
        {myService?.map((service, idx) => (
          <ServiceCard key={idx} service={service} aosAnimation={eachAosAnimation[idx]}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
