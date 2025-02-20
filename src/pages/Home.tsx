import bg from "../assets/bgimg.png";

const Home = () => {
  return (
    <div className="relative w-screen h-screen">
      <img className="w-screen h-screen object-cover" src={bg} alt="Background" />


      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="absolute inset-0 flex items-center justify-between  w-full gap-5">
        <div className="w-1/2 m-10 items-center flex justify-center gap-5">
        <div className="text-white  max-w-lg ">
          <h1 className="text-5xl font-bold leading-tight">
          Find Quality-Assured <br/>Cars Tailored to Your<br/> Budget and Preferences
          </h1>
          <p className="mt-4 text-lg">
          Browse a Wide Range of Certified Used Cars from <br/>Trusted Dealers and Private Sellers
          </p>

          <div className="mt-6 flex items-center space-x-4 gap-5">
            <button className="items-center justify-center  w-[130px] h-[50px] flex bg-red rounded-lg">
              Book My Car
            </button>
           <div className="flex flex-col gap-2">
           <div className=" text-lg">
              ⭐ ⭐ ⭐ ⭐ ⭐
            </div>
            <div>
            Working with 50+ Happy members
            </div>
           </div>
          </div>
        </div>
        </div>
        

        <div className="w-1/2">
        <div className="bg-white rounded-xl shadow-lg p-6 w-96">
          <div className="flex justify-between mb-4">
            <button className="px-4 py-2 font-semibold border-b-2 border-black">
              New Cars
            </button>
            <button className="px-4 py-2 text-gray-500">Used Cars</button>
          </div>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="Make"
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="text"
              placeholder="Model"
              className="w-full p-3 border rounded-lg"
            />

            <div className="mt-3">
              <label className="text-gray-600">Price Range</label>
              <input type="range" className="w-full accent-red-500" />
              <div className="flex justify-between text-sm text-gray-600">
                <span>$1,000</span>
                <span>$5,000</span>
              </div>
            </div>

            <input
              type="text"
              placeholder="Body Type"
              className="w-full p-3 border rounded-lg"
            />

            <button className="w-full bg-red text-white py-3 rounded-lg font-semibold mt-4">
              2334 Cars
            </button>
          </div>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Home;
