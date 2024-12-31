import Image from "next/image"
import { CiStar } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";

function Hero(){
    return(
        <main className="flex">

            {/* Left Section */}
            <div className="text-white w-1/2 mt-5 ml-20">
               <p className="text-xl">Action/Sci-fi</p>
               <h1 className="text-6xl tracking-wider">VENOM 3 </h1>
               <h1 className="text-6xl mt-2 ">THE</h1>
               <h1 className="text-6xl mt-2 ">LAST</h1>
               <h1 className="text-6xl mt-2 text-orange-400">DANCE</h1>

               <div  className="bg-orange-300 text-black w-52 p-2 mt-5 rounded-sm font-semibold flex items-center">
                   <div className="text-2xl ml-4">< CiStar /></div> 
                   <button className="ml-1">Add to favorites</button>
               </div>

               {/* Cast */}
               <h1 className="mt-5 text-2xl"><span className="text-3xl text-orange-400">|</span> Top Cast :</h1>

               {/* Cast Iamges */}
               <div className="flex gap-5 mt-5">
                     
                     {/* Tom Hardy */}
                   <div className="w-32 h-32 border-2 border-gray-600 rounded-full">
                      <Image className="w-full h-full object-cover rounded-full cursor-pointer" src="/tomhardy1.jpeg" 
                             width={10000}
                             height={10}
                            alt="Tom Hardy" />
                   </div>

                      {/* Juno Temple */}
                   <div className="w-32 h-32 border-2 border-gray-600 rounded-full">
                      <Image className="w-full h-full object-cover rounded-full cursor-pointer" src="/junotemple.avif" 
                             width={1000}
                             height={10}
                            alt="Juno Temple"/>
                   </div>

                     {/* Rhys ifans */}
                   <div className="w-32 h-32 border-2 border-gray-600 rounded-full">
                      <Image className="w-full h-full object-cover rounded-full cursor-pointer" src="/rhysifans.jpeg" 
                             width={10000}
                             height={10}
                            alt="Rhys Ifans"/>
                   </div>

               </div>

            </div>

            {/* Right Section */}
            <div className="w-1/2 text-white ml-[32rem] mt-14">
                <h1 className="text-3xl">THE LAST DANCE</h1>
                <p className="mt-2">2024 | <span className="bg-orange-300 text-black font-semibold">13+</span> | 1h 49min | Action/Sci-fi</p>
                <p className="mt-3">Venom:The Last Dance is a 2024 American superhero film written and directed by Kelly Marcel, which features the Marvel Comics character Venom.Eddie and Venom, on the run, face pursuit from both worlds. As circumstances tighten, they're compelled to make a heart-wrenching choice that could mark the end of their symbiotic partnerships.</p>

                <div className="mt-7 flex">
                    <div className="bg-orange-300 text-black w-28 p-2 font-bold flex items-center">
                        <div className=" ml-4"><FaPlay /></div>
                        <button className="ml-2">PLAY</button>
                    </div>
                   
                    <button className="ml-10 border-2 border-gray-100 rounded-sm p-[6px]">WATCH TRILER</button>
                </div>

                <div className="mt-5 h-48 w-[95%] relative bg-white bg-opacity-5 backdrop-blur-sm p-8 rounded-3xl border border-white/30 shadow-xl">
                    <h1 className="">WHAT'S NEXT?</h1>

                    <div className=" flex gap-6 mt-2">
                           <div className="border-2 border-gray-600 rounded-lg w-1/2 h-28">
                                  <Image className="w-full h-full object-cover rounded-lg cursor-pointer" src="/batmanmovie.jpg"
                                        width={10000}
                                        height={10}  
                                        alt=""/>
                          </div>

                            <div className="border-2 border-gray-600 rounded-lg w-1/2 h-28">
                                 <Image className="w-full h-full object-cover rounded-lg cursor-pointer" src="/sandman.jpg"
                                        width={1000}
                                        height={10}  
                                        alt=""/>
                            </div>

                    </div>

                </div>
            </div>
        </main>

    )
}

export default  Hero