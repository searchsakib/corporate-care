const Banner = () => {
  return (
    <div
      className="hero w-full h-[740px] mb-[100px]"
      style={{
        backgroundImage: 'url(/images/bg.jpg)',
      }}
    >
      <div className="hero-content text-center text-neutral-content ">
        <div>
          <h1 className="text-3xl lg:text-8xl font-bold text-white pb-3 font-serif">
            Elevate Your Corporate Events
          </h1>
          <h2 className="text-xs lg:text-2xl font-semibold text-white font-serif">
            Transforming Ideas into Remarkable Realities
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
