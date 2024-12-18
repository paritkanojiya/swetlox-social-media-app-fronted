import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import { privateApi } from "../utils/api";
import Comment from "./Comment";
import PostAction from "./PostAction";
import PostHeader from "./PostHeader";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "transparent",
  boxShadow: 24,
};

const PostModel = ({ open, handleClose, postData, handleDeletePost }) => {
  const [commentValue, setCommentValue] = useState();
  const [commentList, setCommentList] = useState([]);

  const fetchComment = async () => {
    const { data } = await privateApi.get(`/post/comment/${postData.postId}`);
    setCommentList(data);
  };

  useEffect(() => {
    fetchComment();
  }, []);

  const handleComment = (e) => {
    setCommentValue(e.target.value);
  };

  const handleCommentSubmit = (postId) => {
    console.log(postId);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="w-[100%] h-[80vh] flex">
          <div className="relative w-[50%] h-[80vh]">
            {/* Delete Button */}
            <IconButton
              aria-label="delete"
              sx={{
                position: "absolute",
                top: 16,
                left: 16,
                color: "white",
                zIndex: 2,
              }}
              onClick={() => handleDeletePost(postData.postId)}
            >
              <DeleteIcon className="text-red-600 text-lg" />
            </IconButton>
            {/* Image or Video */}
            {postData?.postURL && (
              <img
                src={postData.postURL}
                className="w-[100%] h-[100%] object-fill cursor-pointer"
              />
            )}
            {postData?.reelURL && (
              <video
                src={postData.reelURL}
                className="w-[100%] h-[100%] object-cover cursor-pointer"
                autoPlay
                onMouseEnter={(e) => e.target.pause()}
                onMouseLeave={(e) => e.target.play()}
                loop
              />
            )}
          </div>
          <div className="bg-black w-[50%] h-[80vh]">
            <PostHeader
              userName={postData.userName}
              createdAt={postData.createdAt}
            />
            <div className="w-[100%] h-[65%] overflow-auto">
              <List
                sx={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {commentList.map((comment, index) => (
                  <ListItem key={index} alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: blue[500] }}>
                        {comment?.userName?.charAt(0).toUpperCase()}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography variant="body1" fontWeight="bold">
                          {comment.userName}
                        </Typography>
                      }
                      secondary={
                        <Typography variant="body1">
                          {"" + comment.content}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </div>
            <PostAction />
            <Comment
              comment={commentValue}
              handleComment={handleComment}
              handleCommentSubmit={handleCommentSubmit}
            />
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default PostModel;
