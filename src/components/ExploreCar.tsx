import data from "../assets/mockdata/data";

const ExploreCar = () => {
  console.log(data);

  return (
    <div className="flex flex-col gap-10 p-5 mt-2">
      <div className="ml-10 pl-14">
        <h1 className="text-5xl pl-6 p-2 text-[#333333] font-semibold font-clash leading-tight">
          Explore Our Cars
        </h1>
      </div>
      <div className="w-full flex flex-wrap gap-16 items-center justify-center">
      {data.map((item) => (
        <div
          key={item.id}
          className="w-[180px] h-[170px] flex flex-col items-center bg-primary rounded-lg p-2 border-2"
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-90% object-contain h-[115px]"
          />
          <p className="text-[#333333] mt-2">{item.name}</p>
        </div>
      ))}
    </div>
    </div>

  );
};

export default ExploreCar;
