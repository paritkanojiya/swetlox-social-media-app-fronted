function Postbar(){
  return(
    <>
      <div className="w-full bg-[#152331] h-[55px] rounded-r-full rounded-l-full my-5 flex ">
        <div>
          <img src="src/image/profile.jpg" className="w-[40px]  ml-3 mt-2 rounded-full hover:cursor-pointer" alt="" />
        </div>
        <div>
          <input type="text" className="w-[500px] h-10 ml-2 my-[7px] bg-[#152331] focus:outline-none hover:cursor-pointer caret-white pl-2 text-gray-200  " placeholder="What's on your mind, Aryan?"/>
        </div>
        <div>
          <button className="bg-red-500 w-28 h-10 rounded-full my-[7px] mr-4 text-white font-semibold">Post</button>
        </div>
      </div>
    </>
  )
}
export default Postbar