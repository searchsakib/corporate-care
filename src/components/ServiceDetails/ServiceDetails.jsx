import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailsCard from './DetailsCard';

const ServiceDetails = () => {
  const [eventDetails, setEventDetails] = useState([]);

  const { id } = useParams();
  // console.log(id);

  const eventFetched = useLoaderData();
  // console.log(eventFetched);
  useEffect(() => {
    const findEvent = eventFetched?.find((theEvent) => theEvent.id == id);
    setEventDetails(findEvent);
  }, [id, eventFetched]);
  // console.log(eventDetails);

  return (
    <div>
      <DetailsCard eventDetails={eventDetails}></DetailsCard>
    </div>
  );
};

export default ServiceDetails;
