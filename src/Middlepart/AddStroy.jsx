import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  IconButton,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import { privateApi } from "../utils/api";
import Loadder from "../loadder/Loadder";

const AddStoryDialog = ({ open, handleClose }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isLoading, setLoading] = useState(false);

  // Function to handle file selection and update state with multiple images
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files); // Convert FileList to an array
    setSelectedImages((prevImages) => [...prevImages, ...files]); // Append new files to existing state
  };

  // Function to handle image submission (send to server)
  const handleSubmit = async () => {
    setLoading(true);
    const formData = new FormData();
    selectedImages.forEach((image, index) => {
      formData.append("multipartFiles", image);
    });

    // Example API call to send images to the server
    try {
      await privateApi.post("/story/save", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setLoading(false);
      setSelectedImages([]);
      handleClose();
    } catch (ex) {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      {isLoading ? (
        <div className="w-full bg-[#1c1c1c] h-[350px] flex justify-center items-center ">
          <Loadder></Loadder>
        </div>
      ) : (
        <div className="bg-[#1c1c1c] text-white">
          <DialogTitle className="flex justify-between items-center text-lg font-semibold">
            Add Story
            <IconButton onClick={handleClose}>
              <CloseIcon className="text-white" />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <div className="mb-4">
              <label className="block mb-2 text-sm">Select Images</label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="bg-gray-800 text-white p-2 rounded"
              />
            </div>

            {selectedImages.length > 0 && (
              <div className="grid grid-cols-6 gap-2">
                {selectedImages.map((image, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt={`Preview ${index}`}
                    className="h-24 w-24 object-cover rounded"
                  />
                ))}
              </div>
            )}
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleSubmit}
              variant="contained"
              className=" text-white"
              sx={{ background: "#ff3d00" }}
            >
              Upload
            </Button>
          </DialogActions>
        </div>
      )}
    </Dialog>
  );
};
export default AddStoryDialog;
