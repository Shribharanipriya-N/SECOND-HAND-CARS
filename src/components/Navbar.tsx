
const  Navbar = () => {
  return (
    <div>
    <nav className="w-full text-white p-4 flex items-center fixed z-50 justify-around py-10">
      <h1 className="text-4xl font-bold ml-10">Carspace</h1>
      <div className="">
      <a href="#" className="p-4 hover:underline decoration-red decoration-2 underline-offset-4  rounded-lg ">
  Home
</a>

      <a href="#" className="p-4 hover:underline decoration-red decoration-2 underline-offset-4  rounded-lg ">About us</a>
        <a href="#" className="p-4 hover:underline decoration-red decoration-2 underline-offset-4  rounded-lg ">Certified Pre-Owned</a>
      </div>
      <div className="mr-6 flex gap-3 ">
      <div className=" items-center justify-center  w-[130px] h-[50px] flex bg-red rounded-lg">
        <button className=" flex flex-row ">Compare cars</button>
      </div>
      <div className="flex items-center">
      profile
      </div>
      </div>
    </nav>

    </div>
  )
}

export default Navbar
