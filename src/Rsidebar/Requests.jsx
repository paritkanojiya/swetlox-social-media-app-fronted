function Requests(){
  return(
    <>
      <div className=" w-64 h-16 rounded-xl flex flex-row ml-[9px] ">
          <div>
            <img src="src/image/profile.jpg" className="w-[50px] m-[7px]  rounded-full hover:cursor-pointer " alt="" hover:cursor-pointer />
          </div>
          <div className="my-1 ml-3">
            <h1 className="font-bold text-sm text-white mt-[4px] hover:cursor-pointer">Aryan Babariya</h1>
            <h5 className="text-white hover:cursor-pointer">2 mutual friends</h5>
          </div>
          
    </div>
    <div className="ml-[12px] ">
            <button className="w-[120px] bg-red-500 h-[40px] mr-[10px] rounded-full text-white">Accept</button>
            <button className="w-[120px] bg-white h-[40px] rounded-full">Deny</button>
          </div>
    </>
  )
}
export default Requests