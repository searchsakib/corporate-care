const DetailsCard = ({ eventDetails }) => {
  console.log(eventDetails);
  const { image_det, title, description, price } = eventDetails || {};
  return (
    <div className="max-w-[1320px] mx-auto">
      <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 mt-6 px-6 md:px-10 lg:px-10 xl:px-0 mb-20">
        <div className="relative -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img
            className="w-full"
            src={image_det}
            alt="img-blur-shadow"
            layout="fill"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-blue-700 opacity-90 h-[70px] md:h-[140px] lg:h-[230px] hidden md:block"></div>

          <div
            className="absolute lg:bottom-8 lg:left-0 md:bottom-4 md:left-0 
          bottom-1 left-3 right-0 flex items-center justify-start h-16 "
          >
            <div className="p-10 mb-32 hidden md:block">
              <div className="flex justify-between items-center">
                <h5 className="mb-2 block text-3xl text-white pt-9 pb-2 font-bold leading-snug tracking-normal antialiased">
                  {title}
                </h5>
                <button className=" text-blue-800 text-xs md:text-lg lg:text-lg lg:px-[26px] lg:py-4 md:px-[20px] md:py-3 px-3 py-2 rounded shadow-md w-fit bg-white font-medium">
                  Booking {price}
                </button>
              </div>
              <p className="block text-[10px]  lg:text-base font-normal leading-none lg:leading-[30px] antialiased text-white">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
