import fav from "../assets/icons/favourite.png";
import arrow from "../assets/icons/arrow.png";
import fuel from "../assets/icons/fuel.png";
import mileage from "../assets/icons/mileage.png";
import trans from "../assets/icons/transmission.png";

const CarCard = (props:any) => {
    const item=props.item;
  return (
    <div className="w-[340px] h-[400px] bg-primary border rounded-lg m-10 flex flex-col shadow-lg gap-3 pb-4">
      <div className="h-1/2">
        <img className="rounded-lg w-full h-full object-cover" src={item.img} alt={item.name} />
      </div>
      <div className="flex flex-col px-5 gap-3 ">
        <div className="flex flex-col">
          <p className="text-red">{item.model}</p>
          <h3 className="text-grey1 font-semibold text-lg">{item.name}</h3>
          <p className="text-red">{item.price}</p>
        </div>
        <div className="flex justify-between text-sm">
          <div className="flex items-center gap-2">
            <img className="w-4 h-6" src={fuel} alt="Fuel Type" />
            <div className="flex flex-col">
              <p className="text-grey">Fuel type</p>
              <p className="text-red">{item.fuel_type}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src={mileage} className="w-4 h-5" alt="Mileage" />
            <div className="flex flex-col">
              <p className="text-grey">Mileage</p>
              <p className="text-red">{item.mileage}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src={trans} className="w-4 h-5" alt="Transmission" />
            <div className="flex flex-col">
              <p className="text-grey">Transmission</p>
              <p className="text-red">{item.transmission}</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-between">
          <button className="flex gap-4 items-center">
            View Details <img className="w-3 h-3" src={arrow} alt="Arrow" />
          </button>
          <img className="w-6 h-6" src={fav} alt="Favorite" />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
