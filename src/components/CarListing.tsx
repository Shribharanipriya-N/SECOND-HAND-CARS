import CarCard from "./CarCard";
import cars from "../assets/mockdata/car";

const CarListing = () => {
  return (
    <div className="flex flex-col gap-5 p-10">
      <div className="ml-10 pl-10">
        <h1 className="text-5xl pl-6 p-2 text-[#333333] font-semibold font-clash leading-tight">
          Feature Listing
        </h1>
      </div>
      <div className="w-full flex gap-10 flex-wrap justify-around">
        {cars.map((item) => (
          <CarCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CarListing;
