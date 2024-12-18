import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { privateApi } from "../utils/api";
import Loadder from "../loadder/Loadder";

function UploadPostDialog({ open, handleClose }) {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handlePostUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("caption", caption);
    setLoading(true);
    const { data } = await privateApi.post("/post", formData);
    setFile(null);
    setCaption("");
    setLoading(false);
  };
  const handlePost = async () => {
    await handlePostUpload();
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ bgcolor: "#1c1c1c", color: "#fff" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Create a Post</Typography>
          <IconButton onClick={handleClose} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent
        sx={{
          bgcolor: "#1c1c1c",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "200px", // Adjust based on your content's height
        }}
      >
        {loading ? (
          <Loadder></Loadder>
        ) : (
          <>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mb={2}
            >
              <IconButton color="primary" component="label">
                <input
                  hidden
                  accept="image/*,video/*"
                  type="file"
                  onChange={handleFileChange}
                />
                <CloudUploadIcon sx={{ fontSize: 60, color: "#fff" }} />
              </IconButton>
              {file && (
                <Box mt={2} textAlign="center">
                  <Typography variant="body1" sx={{ color: "#fff" }}>
                    {file.name}
                  </Typography>
                  <Box
                    mt={1}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {file.type.startsWith("image/") && (
                      <img
                        src={URL.createObjectURL(file)}
                        alt="Selected"
                        style={{ maxHeight: "150px", borderRadius: "10px" }}
                      />
                    )}
                    {file.type.startsWith("video/") && (
                      <video
                        controls
                        style={{ maxHeight: "150px", borderRadius: "10px" }}
                      >
                        <source src={URL.createObjectURL(file)} />
                      </video>
                    )}
                  </Box>
                </Box>
              )}
            </Box>
            <TextField
              fullWidth
              multiline
              rows={3}
              variant="outlined"
              placeholder="Write a caption..."
              value={caption}
              onChange={handleCaptionChange}
              sx={{
                bgcolor: "#333",
                borderRadius: "10px",
                input: { color: "#fff" },
                textarea: { color: "#fff" },
              }}
            />
          </>
        )}
      </DialogContent>
      <DialogActions sx={{ bgcolor: "#1c1c1c" }}>
        <Button onClick={handleClose} sx={{ color: "#fff" }}>
          Cancel
        </Button>
        <Button
          onClick={handlePost}
          variant="contained"
          sx={{
            bgcolor: "#ff3d00",
            ":hover": { bgcolor: "#ff6333" },
            color: "#fff",
          }}
        >
          Post
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UploadPostDialog;
