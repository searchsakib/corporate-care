import Banner from '../../components/Banner/Banner';
import Faqs from '../../components/Faqs/Faqs';
import Review from '../../components/Review/Review';
import Services from '../../components/Services/Services';

const Home = () => {
  return (
    <div className="pb-[100px] overflow-x-hidden">
      <Banner></Banner>
      <div>
        <Services></Services>
      </div>
      <div>
        <Review></Review>
      </div>
      <div>
        <Faqs></Faqs>
      </div>
    </div>
  );
};

export default Home;
