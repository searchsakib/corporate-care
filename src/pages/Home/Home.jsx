import Banner from '../../components/Banner/Banner';
import Review from '../../components/Review/Review';
import Services from '../../components/Services/Services';

const Home = () => {
  return (
    <div className="pb-[100px]">
      <Banner></Banner>
      <div>
        <Services></Services>
      </div>
      <div>
        <Review></Review>
      </div>
    </div>
  );
};

export default Home;
