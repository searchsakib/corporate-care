import Banner from '../../components/Banner/Banner';
import ServiceCard from '../../components/Services/ServiceCard';

const Home = () => {
  return (
    <div className="pb-[100px]">
      <Banner></Banner>
      <div>
        {/* have to change this to services */}
        <ServiceCard></ServiceCard>
      </div>
    </div>
  );
};

export default Home;
