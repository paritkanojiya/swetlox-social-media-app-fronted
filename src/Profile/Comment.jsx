import { Button } from "@mui/material";
import { useState } from "react";

const Comment = ({ handleComment, comment, handleCommentSubmit }) => {
  return (
    <>
      <div className="flex justify-between text-white">
        <input
          className="mx-4 outline-none w-[90%] bg-transparent"
          type={"text"}
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => handleComment(e.target.value)}
        ></input>
        {comment && (
          <Button
            className="w-[10%]"
            sx={{ color: "white" }}
            onClick={() => handleCommentSubmit()}
          >
            Post
          </Button>
        )}
      </div>
    </>
  );
};
export default Comment;
