import { useEffect, useState } from "react";
import { privateApi } from "../utils/api";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import PostModel from "./PostModel";

export function Profilepost({ postss, handleDeletePost }) {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  const handleHoverIn = () => {
    setHover(true);
  };
  const handleHoverOut = () => {
    setHover(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePostModelOpen = () => {
    setOpen(true);
  };

  const handleDeletePostAndClose = async (postId) => {
    try {
      await privateApi.delete(`/post/${postId}`);
      handleDeletePost(postId); // Remove the post from the postData state
      handleClose(); // Close the modal
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div
      className="bg-black w-[213px] h-[250px] ml-2 mb-2 relative"
      onMouseEnter={handleHoverIn}
      onMouseLeave={handleHoverOut}
    >
      <img
        src={postss.postURL}
        alt="Profile Post"
        className="w-full  h-full object-fill"
      />
      {hover && (
        <div
          className="absolute bg-[#25252576] w-[100%] h-[100%] top-0 "
          onClick={handlePostModelOpen}
        >
          <div className="w-[100%] h-[100%] flex justify-center items-center gap-6 duration-300">
            <div>
              <FavoriteBorderIcon className="text-white text-lg "></FavoriteBorderIcon>
            </div>
            <div>
              <CommentIcon className="text-white text-lg "></CommentIcon>
            </div>
          </div>
        </div>
      )}
      {open && (
        <PostModel
          open={open}
          handleClose={handleClose}
          postData={postss}
          handleDeletePost={handleDeletePostAndClose}
        />
      )}
    </div>
  );
}

function ProfilePosts() {
  const [postData, setPostData] = useState([]);

  const fetchPostData = async () => {
    try {
      const { data } = await privateApi.get("/post/get-post");
      setPostData(data);
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  const handleDeletePost = (postId) => {
    setPostData((prevPostData) =>
      prevPostData.filter((post) => post.postId !== postId)
    );
  };

  return (
    <div className="ProfilePosts">
      <div className="flex flex-wrap">
        {postData.map((post) => (
          <Profilepost
            key={post.postId}
            postss={post}
            handleDeletePost={handleDeletePost}
          />
        ))}
      </div>
    </div>
  );
}

export default ProfilePosts;
