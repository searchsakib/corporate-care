import { useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Faqs = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: 'What services does Corporate Care offer?',
      answer:
        'Corporate Care provides a wide range of corporate event management services, including conference planning, product launch events, exhibitions, and more. Our goal is to help you create memorable and successful corporate events.',
    },
    {
      question: 'How can I request a quote for my event?',
      answer:
        'Requesting a quote is easy! Simply visit just log in and visit our "Contact Us" page . Our team will get in touch with you to discuss your requirements and provide a customized quote.',
    },
    {
      question: 'What is the typical timeline for event planning?',
      answer:
        "Event planning timelines can vary depending on the size and complexity of your event. We recommend contacting us well in advance to ensure a smooth planning process. For larger events, it's best to start planning at least 6-12 months in advance.",
    },
    {
      question: 'Can Corporate Care handle both small and large events?',
      answer:
        "Yes, absolutely! We have experience in managing events of all sizes. Whether you're hosting a small executive retreat or a large-scale conference, our team can tailor our services to meet your needs.",
    },
    {
      question:
        'What sets Corporate Care apart from other event management companies?',
      answer:
        'Corporate Care stands out due to our attention to detail, creative approach, and dedication to client satisfaction. We work closely with our clients to understand their vision and deliver exceptional results that exceed expectations.',
    },
  ];

  const toggleAccordion = (idx) => {
    if (activeIndex === idx) {
      setActiveIndex(null);
    } else {
      setActiveIndex(idx);
    }
  };

  return (
    <div className="max-w-[1320px] mx-auto mt-24 px-6 md:px-0 lg:px-0">
      <div className="text-center mb-16 p-2 md:p-0 lg:p-0">
        <h2 className="text-5xl font-semibold m-5">
          Frequently Asked Questions
        </h2>
        <p>Most frequently asked questions about our work</p>
      </div>

      {/* faq here */}
      <div data-aos="flip-left">
        <section className="bg-gray-100 py-12 rounded-lg">
          <div className="max-w-6xl mx-auto px-5">
            {faqItems.map((item, index) => (
              <div key={index} className="mb-6">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-xl font-semibold">{item.question}</h3>
                  <span
                    className={`${
                      activeIndex === index ? 'transform rotate-180' : ''
                    } transition-transform duration-300 text-gray-600`}
                  >
                    &#9660;
                  </span>
                </div>
                {activeIndex === index && (
                  <p className="text-gray-600 mt-3 leading-6">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Faqs;
