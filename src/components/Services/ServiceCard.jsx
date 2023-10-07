const ServiceCard = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-[900px] h-[525px]"
          src="https://images.pexels.com/photos/2914419/pexels-photo-2914419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
