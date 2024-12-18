import { CardActions, IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useState } from "react";
import { privateApi } from "../utils/api";

const PostAction = () => {
  const [like, setLike] = useState(false);
  const handleLike = async (postId) => {
    if (!like) {
      await privateApi.get(`/like-Post/${postId}`);
      setLike((state) => !state);
    }
  };
  return (
    <>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          // onClick={() => handleLike(post.postId)}
        >
          <FavoriteIcon
            className={true ? "text-red-600" : like ? "text-red-600" : ""}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon className="text-white" />
        </IconButton>
        <IconButton>
          <BookmarkIcon className="text-white"></BookmarkIcon>
        </IconButton>
      </CardActions>
    </>
  );
};
export default PostAction;
