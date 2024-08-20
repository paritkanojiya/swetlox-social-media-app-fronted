import "../css/c.css";
function Fullchat() {
  const messages = [
    {
      id: 1,
      sender: "self-end",
      content:
        "Hello my name is Aryan. I have been living in Surat, Gujarat since 2005.",
    },
    {
      id: 2,
      sender: "self-start",
      content: "Yes, sir give me more information",
    },
    {
      id: 3,
      sender: "self-end",
      content: "My height is 6.6 and my mobile no is 9537519564",
    },
    
  ];
  return (
    <>
      <div className="w-[710px] h-[630px] mt-24 rounded-xl ml-[400px] bg-[#0c0a15] fixed p-2">
        <div className="bg-[#170e30] w-full h-16 rounded-xl flex flex-row ">
          <div>
            <img
              src="src/image/profile.jpg"
              className="w-[50px] m-[7px] ml-3 rounded-full hover:cursor-pointer"
              alt=""
            />
          </div>
          <div className="my-2 ml-1">
            <h1 className="font-bold text-white">Aryan Babariya</h1>
            <h5 className="text-white hover:cursor-pointer">@aaary.1</h5>
          </div>
        </div>
        
        <div className="flex flex-col w-full h-[490px] mt-2 overflow-y-scroll no-scrollbar">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`bg-[#170e30] w-fit max-w-[300px] mb-2 rounded-xl ${message.sender}`}
            >
              <h1 className="text-white font-medium m-2 p-1">{message.content}</h1>
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-0 mx-2">
          <div className="flex">
            <div>
              <button className="bg-black w-[60px] h-12 rounded-l-md">
                <img
                  src="src/image/Message1.png"
                  alt=""
                  className="w-[30px] ml-4"
                />
              </button>
            </div>
            <div>
              <form action="">
                <input
                  type="text"
                  className="w-[585px] h-12   bg-black focus:outline-none hover:cursor-pointer caret-white pl-2 text-gray-200 pb-1"
                  placeholder="Type here your messages......"
                />
              </form>
            </div>
            <div>
              <button className="bg-black w-[50px] h-12 rounded-r-md">
                <img src="src/image/Msgicon.png" alt="" className="w-[30px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Fullchat;
