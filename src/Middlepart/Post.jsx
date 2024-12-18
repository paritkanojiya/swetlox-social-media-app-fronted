import PostHeader from "../Profile/PostHeader";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useEffect, useState } from "react";
import { privateApi } from "../utils/api";
import Comment from "../Profile/Comment.jsx";
import Loadder from "../loadder/Loadder";
import CommentDialog from "../CommentDialogBox";
import { formatDistanceToNow } from "date-fns";

function Post({ post }) {
  const [isLike, setLike] = useState(false);
  const [isBookMark, setBookMark] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [comment, setComment] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [commentDialogOpen, setCommentDialogOpen] = useState(false);
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    setLike(post.like);
    setBookMark(post.bookMark);
    setLikeCount(post.likeCount);
  }, [post.like, post.likeCount, post.bookMark]);

  function timeAgo(dateString) {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true });
  }
  const handleLike = async (postId) => {
    console.log("Current Like State:", isLike);
    const newLikeState = !isLike;
    setLike(newLikeState);

    if (newLikeState) {
      setLikeCount((prevCount) => prevCount + 1);
    } else {
      setLikeCount((prevCount) => prevCount - 1);
    }
    try {
      await privateApi.get(`/post/like/${postId}`);
    } catch (error) {
      console.error("Error updating like status:", error);
      setLike(!newLikeState);
      setLikeCount((prevCount) =>
        newLikeState ? prevCount - 1 : prevCount + 1
      );
    }
  };

  const handleBookMark = async (postId) => {
    const newBookMarkState = !isBookMark;
    setBookMark(newBookMarkState);
    try {
      await privateApi.get(`/post/bookmark-post/${postId}`);
    } catch (ex) {
      console.error("Error updating bookmark status:", ex);
    }
  };

  const handleComment = (value) => {
    setComment(value);
  };
  const handleCommentSubmit = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("postId", post.postId);
    formData.append("content", comment);
    await privateApi.post("/post/comment", formData);
    setLoading(false);
    setComment("");
  };

  const handleCommentDialogOpen = () => {
    setCommentDialogOpen(true);
  };
  const handleCommentDialogClose = () => {
    setCommentDialogOpen(false);
  };

  return (
    <>
      <div className="bg-[#152331] w-full rounded-xl p-2 mb-4">
        <PostHeader
          userName={post.userName}
          createdAt={timeAgo(post.createdAt)}
        />
        <div className="m-3">
          <img
            src={post.postURL}
            alt="Post content"
            className="rounded-xl w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-[42px] flex justify-between text-white">
          <div className="flex space-x- ml-3 gap-3">
            <div>
              <FavoriteBorderIcon
                onClick={() => handleLike(post.postId)}
                style={{ fontSize: "32px" }}
                className={`cursor-pointer ${isLike ? "text-red-600" : ""}`}
              />
              <p className="text-center">{likeCount}</p>
            </div>
            <div>
              <CommentIcon
                className="cursor-pointer"
                style={{ fontSize: "32px" }}
                onClick={handleCommentDialogOpen}
              />
              <p className="text-center">{}</p>
            </div>
          </div>
          <BookmarkBorderIcon
            onClick={() => handleBookMark(post.postId)}
            className={`cursor-pointer text ${
              isBookMark ? "text-red-600" : ""
            }`}
            style={{ fontSize: "32px" }}
          />
        </div>
        <div className="mx-4 mt-2">
          <p className="text-lg text-white mt-3">{post.caption}</p>
        </div>
        <div className="py-2 w-[100%]">
          {isLoading ? (
            <div className="w-[100%] flex justify-center items-center">
              <Loadder></Loadder>
            </div>
          ) : (
            <Comment
              comment={comment}
              handleComment={handleComment}
              handleCommentSubmit={handleCommentSubmit}
            ></Comment>
          )}
        </div>
      </div>
      <CommentDialog
        open={commentDialogOpen}
        onClose={handleCommentDialogClose}
        postId={post.postId}
      ></CommentDialog>
    </>
  );
}

export default Post;
