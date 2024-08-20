

function Profilepost({ postss }) {
  return (
    <div className="bg-black w-[213px] h-[211px] ml-2 mb-2">
      <img
        src={postss.profileImg}
        alt="Profile Post"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function ProfilePosts({postss}) {

  return (
    <div className="ProfilePosts">
      <div className="flex flex-wrap">
        {postss.map(post => (
          <Profilepost key={post.id} postss={post} />
        ))}
      </div>
    </div>
  );
}
export default ProfilePosts;
