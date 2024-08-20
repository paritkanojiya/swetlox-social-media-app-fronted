function Post({ post }) {
  return (
    <div className="bg-[#152331] w-full rounded-xl p-2 mb-4">
      <div className="flex items-center">
        <img src={post.profileImg} className="w-[40px] ml-3 mt-2 rounded-full hover:cursor-pointer" alt="Profile" />
        <div className="ml-3 mt-1">
          <h1 className="font-bold text-white hover:cursor-pointer">{post.username}</h1>
          <h4 className="text-slate-500 hover:cursor-pointer">{post.location}, {post.time}</h4>
        </div>
        <div className="ml-[445px] mt-[-25px]">
          <h4 className="text-white font-bold text-2xl hover:cursor-pointer">...</h4>
        </div>
      </div>
      <div className="h-[660px] m-3">
        <img src={post.postImg} alt="Post content" className="rounded-xl w-full h-full object-cover"/>
      </div>
      <div className="w-full mt-3 h-[42px] flex justify-between items-center">
        <div className="flex space-x-4">
          <img src="src/image/Like.png" alt="Like" className="h-8 mt-2 ml-4" />
          <img src="src/image/Comment.png" alt="Comment" className="h-10 mt-1" />
          <img src="src/image/Share.png" alt="Share" className="h-8 mt-2" />
        </div>
        <img src="src/image/Bookmark.png" alt="Bookmark" className="h-8 mr-2" />
      </div>
      <div className="mx-3 mt-2">
        <h1 className="text-lg text-white mt-5 ml-2">{post.caption}</h1>
        <h5 className="text-lg text-white mt-5 ml-2">{post.hashtags}</h5>
      </div>
    </div>
  );
}
export default Post




