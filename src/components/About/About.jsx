const About = () => {
  return (
    <div className="max-w-[1320px] mx-auto mb-5">
      <img
        className="w-full h-[250px] md:h-auto lg:h-auto"
        src="/images/about-bg.jpg"
        alt=""
      />
      <div className=" bg-white md:mt-10 lg:mt-10 md:mb-14 lg:mb-14 py-8 rounded-lg p-5 md:p-0 lg:p-0">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>

        <h2 className="text-2xl font-semibold mb-4">
          Your Partner in Crafting Memorable Corporate Events
        </h2>

        <p className="text-gray-700">
          Welcome to Corporate Care, your trusted partner in creating
          exceptional corporate events. With a passion for innovation, a
          commitment to excellence, and a team of dedicated professionals, we've
          been transforming ordinary gatherings into extraordinary experiences
          for 5 years.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is simple: to deliver corporate events that exceed
            expectations. We strive to make every event an unforgettable
            experience that leaves a lasting impression on your clients,
            employees, and stakeholders. We believe that the power of a
            well-executed event can inspire, motivate, and strengthen the bonds
            within your organization.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">What Sets Us Apart</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Creative Excellence: Our team of seasoned event planners,
              designers, and producers are masters at thinking outside the box.
            </li>
            <li>
              Attention to Detail: We understand that the smallest details can
              make the biggest difference.
            </li>
            <li>
              Collaborative Approach: We consider ourselves an extension of your
              team.
            </li>
            <li>
              Vendor Network: Over the years, we've built strong relationships
              with top-notch vendors.
            </li>
            <li>
              Budget-Friendly Solutions: We are committed to delivering
              outstanding events without breaking the bank.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

// style={{
//   backgroundImage: 'url(/images/bg.jpg)',
// }}
