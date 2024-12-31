import { FaSearch } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";


function Navbar(){
    return(
        <nav className="flex justify-between m-5 p-4 items-center">
            <div className="flex">
                <h1 className="text-orange-400 text-4xl font-bold">VN.</h1>

                <ul className="text-white flex gap-12 ml-28 items-center cursor-pointer">
                    <li className="text-[1.1rem] hover:text-orange-400">Home</li>
                    <li className="text-[1.1rem] hover:text-orange-400">Series</li>
                    <li className="text-[1.1rem] hover:text-orange-400">Movies</li>
                    <li className="text-[1.1rem] hover:text-orange-400">Category</li>
                </ul>
            </div>

            <div className="border-2 border-gray-100 p-2 rounded-full w-96 ml-96">
                 <input className="bg-transparent focus:outline-none" type="text" placeholder="Search Your Episode"/>
               <button className="text-white ml-36">< FaSearch /></button>
            </div>

            <div className="text-white text-4xl mr-5">
            <MdOutlineAccountCircle />
            </div>
        </nav>
    )
}

export default Navbar