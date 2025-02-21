import { CgProfile } from "react-icons/cg";
const  Navbar = () => {
  return (
    <div>
    <nav className="w-full text-white  flex items-center fixed z-50 justify-around py-8">
      <h1 className="text-4xl font-semibold ml-10">Carspace</h1>
      <div className="">
      <a href="#" className="p-4 hover:underline decoration-red decoration-2 underline-offset-4  rounded-lg ">
  Home
</a>

      <a href="#" className="p-4 hover:underline decoration-red decoration-2 underline-offset-4  rounded-lg ">About us</a>
        <a href="#" className="p-4 hover:underline decoration-red decoration-2 underline-offset-4  rounded-lg ">Certified Pre-Owned</a>
      </div>
      <div className="mr-6 flex gap-3 ">
      <div className=" items-center justify-center  w-[145px] h-[45px] flex bg-red rounded-lg">
        <button className=" flex flex-row ">Compare cars</button>
      </div>
      <div className="flex items-center">
      <CgProfile className="rounded-lg" size={30}/>
      </div>
      </div>
    </nav>

    </div>
  )
}

export default Navbar
