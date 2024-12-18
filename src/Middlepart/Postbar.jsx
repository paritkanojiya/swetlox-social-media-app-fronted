import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box, Typography } from "@mui/material";
import UploadPostDialog from "./UploadPostDialog";
import { useSelector } from "react-redux";

function Postbar() {
  const [openDialog, setOpenDialog] = useState(false);
  const { user } = useSelector((state) => state.userDetails);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#152331",
        borderRadius: "30px",
        margin: "20px 0",
      }}
    >
      <Avatar
        alt={user.fullName}
        src={user.profileURL}
        sx={{ width: 56, height: 56, cursor: "pointer" }}
      />
      <TextField
        variant="standard"
        fullWidth
        placeholder={"What's on your mind, ? " + user.userName}
        sx={{
          marginLeft: "20px",
          borderRadius: "30px",
          outline: "none",
          input: { color: "#fff" },
        }}
        onClick={handleOpenDialog}
        InputProps={{
          readOnly: true,
        }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{
          marginLeft: "20px",
          borderRadius: "20px",
          padding: "10px 30px",
          backgroundColor: "#ff3d00",
          "&:hover": { backgroundColor: "#FF787C" },
        }}
        onClick={handleOpenDialog}
      >
        UploadPost
      </Button>
      {/* Upload post dialog */}
      <UploadPostDialog open={openDialog} handleClose={handleCloseDialog} />
    </Box>
  );
}

export default Postbar;
