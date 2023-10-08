const Contact = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-3 lg:px-0">
      <div className="max-w-3xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">Corporate Care Office</h2>
          <p>123 Main Street</p>
          <p>City, State ZIP</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">Business Hours</h2>
          <p>Monday-Friday: 9:00 AM - 5:00 PM</p>
          <p>Saturday-Sunday: Closed</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">Connect with Us</h2>
          <p>Email: info@corporatecare.com</p>
          <p>Follow us on Social Media:</p>
          <ul className="list-none p-0 mt-2">
            <li className="mb-1">
              <a href="#" className="text-blue-500 hover:underline">
                Facebook
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="text-blue-500 hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">Further Queries</h2>
          <p>For partnership inquiries, please contact:</p>
          <p>Name: John Smith</p>
          <p>Email: john@corporatecare.com</p>
          <p>Phone: (456) 789-0123</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
