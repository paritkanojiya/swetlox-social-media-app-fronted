import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { privateApi } from "./utils/api";

const CommentDialog = ({ open, onClose, postId }) => {
  const [commentList, setCommentList] = useState([]);
  const fetchComment = async () => {
    const { data } = await privateApi.get(`/post/comment/${postId}`);
    setCommentList(data);
  };
  useEffect(() => {
    fetchComment();
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      sx={{ bgcolor: "transparent", color: "white" }}
      fullWidth={false}
      PaperProps={{
        style: {
          backgroundColor: "#1c1c1c", // Background color
          color: "white", // Text color
          minWidth: "500px", // Minimum width
          maxWidth: "500px", // Maximum width
        },
      }}
    >
      <DialogTitle>Comments</DialogTitle>
      <DialogContent>
        <List>
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
                  <Typography variant="body1">{comment.content}</Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommentDialog;
