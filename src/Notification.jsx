import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import PostHeader from "./Profile/PostHeader";
import NotificationHeader from "./NotificationHeader";

function NotificationDialog() {
  const [open, setOpen] = useState(false);
  const notifications = useSelector((state) => state.webSocket.notifications);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(notifications);
  return (
    <>
      {/* Notification Icon */}
      <Box sx={{ padding: "0 20px", cursor: "pointer" }} onClick={handleOpen}>
        <img
          className="w-[30px]"
          src="src/image/Notification.png"
          alt="Notifications"
        />
      </Box>

      {/* Notification Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            bgcolor: "#1c1c1c",
            color: "#fff",
          }}
        >
          Notifications
          <IconButton onClick={handleClose}>
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </DialogTitle>
        <hr></hr>
        <DialogContent sx={{ bgcolor: "#1c1c1c", color: "#fff" }}>
          <List>
            {/* Sample notification items */}
            {notifications.map((notificationMetaData) => (
              <div className="w-[100%]">
                <NotificationHeader
                  userName={notificationMetaData.sender}
                  message={notificationMetaData.message}
                  rightImage={notificationMetaData.postURL}
                ></NotificationHeader>
              </div>
            ))}
            {/* Add more ListItems here based on your notifications */}
          </List>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default NotificationDialog;
