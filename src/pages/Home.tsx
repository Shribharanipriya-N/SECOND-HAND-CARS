import bg from "../assets/bgimg.png";
import CarListing from "../components/CarListing";
import ExploreCar from "../components/ExploreCar";

const Home = () => {
  return (
    <>
    <div className="relative w-screen h-screen">
      <img className="w-screen h-screen object-cover" src={bg} alt="Background" />

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="absolute inset-0 flex items-center justify-between w-full gap-5">
        
        <div className="w-1/2 m-10 items-center flex justify-center gap-5 ml-10 pl-10">
          <div className="text-white max-w-xl">
            <h1 className="text-5xl font-semibold font-clash leading-tight">
              Find Quality-Assured <br />
              Cars Tailored to Your
              <br /> Budget and Preferences
            </h1>
            <p className="mt-4 text-lg">
              Browse a Wide Range of Certified Used Cars from <br />
              Trusted Dealers and Private Sellers
            </p>

            <div className="mt-6 flex items-center space-x-4 gap-5">
              <button className="items-center justify-center w-[145px] h-[45px] flex bg-red rounded-lg">
                Book My Car
              </button>
              <div className="flex flex-col gap-1">
                <div className="text-lg">⭐ ⭐ ⭐ ⭐ ⭐</div>
                <div>Working with 50+ Happy members</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 mr-10 items-center flex justify-center">
          <div className="bg-primary rounded-xl shadow-lg p-8 w-96 gap-2">
            <div className="flex justify-between mb-4 p-1 bg-placeholder rounded-3xl">
              <div className="w-1/2 p-1 flex items-center justify-center">
                <button className="w-full h-full font-medium border-black bg-primary rounded-3xl">
                  New Cars
                </button>
              </div>
              <div className="w-1/2 p-1 flex items-center justify-center">
                <button className="px-4 py-2">Used Cars</button>
              </div>
            </div>

            <div className="space-y-3 text-[#333333]">
              <input type="text" placeholder="Make" className="w-full  p-3 border rounded-lg bg-placeholder" />
              <input type="text" placeholder="Models" className="w-full  p-3 border rounded-lg bg-placeholder" />

              <div className="mt-3 text-[#333333]">
                <label className="text-gray-600">Price Range</label>
                <input type="range" className="w-full accent-red" />
                <div className="flex justify-between text-sm text-[#333333]">
                  <span>$1,000</span>
                  <span>$5,000</span>
                </div>
              </div>

              <input type="text" placeholder="Body" className="w-full text-black p-3 border rounded-lg bg-placeholder" />

              <button className="w-full bg-red text-white py-3 rounded-lg font-semibold mt-4">
                2334 Cars
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-16   text-primary text-xl font-medium ml-20 pl-20">
        Welcome
      </div>
    </div>
    <ExploreCar/>
    <CarListing/>
    </>
    
  );
};

export default Home;
