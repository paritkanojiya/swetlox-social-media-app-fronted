
function Navbar(){
  return(
    <>
    <div className="bg-[#152331] w-[1535px] h-[65px] flex flex-row px-32  fixed">
      <div>
        <img src="src/image/logo2.png" alt="Logo" className=" w-50 mt-2 hover:cursor-pointer"/>
      </div>
      <div >
        <form action="" className="flex flex-row w-[700px]" >
          <img src="src/image/glass.svg" alt="" className="w-12 h-10 p-2 pr-0  my-[12px]  ml-56 bg-black rounded-l-full hover:cursor-pointer"/>
          <input type="text" className="w-[550px] h-10 my-[12px] rounded-r-full bg-black focus:outline-none hover:cursor-pointer caret-white pl-2 text-gray-200"/>
        </form>
      </div>
      <div>
          <button className="text-white w-28   h-10 bg-red-700 rounded-r-full rounded-l-full font-bold my-[13px] ml-48">Create</button>
      </div>
      <div className="ml-14">
        <img src="src/image/profile.jpg" className="w-[360px]   rounded-full my-[11px] hover:cursor-pointer" alt="" />
      </div>
    </div>
  </>
  )
};
export default Navbar