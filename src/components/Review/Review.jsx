import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Review = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  // I have to add this to div: data-aos="fade-up"

  return (
    <div className="max-w-[1320px] mx-auto mt-24 px-6 md:px-0 lg:px-0">
      <div className="text-center mb-16 p-2 md:p-0 lg:p-0">
        <h2 className="text-5xl font-semibold m-5">What Our Clients Say</h2>
        <p>
          Listen to what our clients have to say about their journey with us and
          how we've met their needs. Discover the real stories behind their
          success and the exceptional service they've received.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-16">
        <div data-aos="fade-left">
          <img className="mx-auto" src="/images/client1.png" alt="" />
          <p className="italic py-6 text-2xl leading-10 text-center">
            "Our company has been working with Corporate Care for several years
            now, and they continue to exceed our expectations. They've proven
            their expertise time and again."
          </p>
          <h2 className="font-semibold text-center text-xl">Chris Wokes</h2>
          <p className="text-center text-lg">Founder of Delper</p>
        </div>
        <div data-aos="fade-up">
          <img className="mx-auto" src="/images/client2.png" alt="" />
          <p className="italic py-6 text-2xl leading-10 text-center">
            "I can't thank Corporate Care enough for their outstanding event
            management services. They took our product launch event to the next
            level with innovative concepts and flawless execution."
          </p>
          <h2 className="font-semibold text-center text-xl">David Miller</h2>
          <p className="text-center text-lg">CEO of Zinger Inc.</p>
        </div>
        <div data-aos="fade-right">
          <img className="mx-auto" src="/images/client3.png" alt="" />
          <p className="italic py-6 text-2xl leading-10 text-center">
            "Corporate Care has been our trusted partner for all our corporate
            events, and they've consistently delivered exceptional results.
            Their ability to understand our brand is unmatched."
          </p>
          <h2 className="font-semibold text-center text-xl">Adam Zampa</h2>
          <p className="text-center text-lg">Founder of Vision</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
