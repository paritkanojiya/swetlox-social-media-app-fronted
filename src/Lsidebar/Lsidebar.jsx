import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { AddPhotoAlternate } from "@mui/icons-material";
import { privateApi } from "../utils/api";
import Loadder from "../loadder/Loadder";

function Lsidebar({ setActiveComponent }) {
  const { user } = useSelector((state) => state.userDetails);
  const [isLoading, setLoading] = useState(false);
  const handleHomeClick = () => {
    console.log("Home clicked");
    setActiveComponent("Middlepart");
  };

  const handleReelsClick = () => {
    console.log("Reels clicked");
    setActiveComponent("Reels");
  };
  const handleMessagebarClick = () => {
    console.log("Chat clicked");
    setActiveComponent("Messagebar");
  };

  const [open, setOpen] = useState(false);
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [description, setDescription] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setVideoFile(null);
    setVideoPreview(null);
    setDescription("");
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setVideoPreview(previewURL);
    }
  };

  const handleUpload = async () => {
    setLoading(true);
    console.log("Uploading: ", videoFile, description);
    const formData = new FormData();
    formData.append("file", videoFile);
    formData.append("caption", description);
    try {
      await privateApi.post("/reel", formData);
      setLoading(false);
      handleClose();
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-64 border-white shadow-md ml-32 mt-24 fixed">
        <NavLink
          to={"/profile"}
          className="bg-[#152331] w-64 h-16 rounded-xl flex flex-row"
        >
          <div className="w-[50px] m-[7px] ">
            <img
              src={user.profileURL}
              className="w-[100%] h-[50px] ml-1 rounded-full mr-2 overflow-hidden hover:cursor-pointer"
              alt=""
            />
          </div>
          <div className="my-2 ml-1">
            <h1 className="font-bold text-white">{user.fullName}</h1>
            <h5 className="text-white hover:cursor-pointer">
              @{user.userName}
            </h5>
          </div>
        </NavLink>
        <div className="bg-[#152331] w-64 h-[450px] rounded-xl flex-row mt-4">
          <NavLink
            to={"/"}
            className="w-full h-[60px] flex p-[30px] pt-[20px] ml-1 mt-0 hover:cursor-pointer"
            onClick={handleHomeClick}
          >
            <div className="w-[45px] h-[45px]">
              <img src="src/image/Home.png" alt="" className="w-[28px]" />
            </div>
            <div className="ml-[20px] text-xl">
              <h2 className="text-white text-lg font-semibold">Home</h2>
            </div>
          </NavLink>
          <NavLink
            to={"/reels"}
            className="w-full h-[60px] flex p-[30px] pt-[20px] ml-1 mt-0 hover:cursor-pointer"
            onClick={handleReelsClick}
          >
            <div className="w-[45px] h-[45px]">
              <img src="src/image/Explore.png" alt="" className="w-[28px]" />
            </div>
            <div className="ml-[20px] text-xl">
              <h2 className="text-white text-lg font-semibold">Reels</h2>
            </div>
          </NavLink>
          <NavLink
            to={"/message"}
            className="w-full h-[60px] flex p-[30px] pt-[20px] ml-1 mt-0 hover:cursor-pointer"
            onClick={handleMessagebarClick}
          >
            <div className=" w-[45px] h-[45px] ">
              <img src="src/image/Message.png " alt="" className="w-[28px]" />
            </div>
            <div className="ml-[20px] text-xl">
              <h2 className="text-white text-lg font-semibold">Message</h2>
            </div>
          </NavLink>
          <NavLink
            to={"/collections"}
            className="w-full h-[60px] flex p-[30px] pt-[20px] ml-1 mt-0 hover:cursor-pointer"
          >
            <div className=" w-[45px] h-[45px] ">
              <img src="src/image/Bookmark.png " alt="" className="w-[28px]" />
            </div>
            <div className="ml-[20px] text-xl">
              <h2 className="text-white text-lg font-semibold">Bookmark</h2>
            </div>
          </NavLink>
          <div className="w-full h-[60px] flex p-[30px] pt-[20px] ml-1 mt-0 hover:cursor-pointer">
            <div className=" w-[45px] h-[45px] ">
              <img
                src="src/image/Analaytics.png "
                alt=""
                className="w-[28px]"
              />
            </div>
            <div className="ml-[20px] text-xl">
              <h2 className="text-white text-lg font-semibold">Analytics</h2>
            </div>
          </div>
          <div className="w-full h-[60px] flex p-[30px] pt-[20px] ml-1 mt-0 hover:cursor-pointer">
            <div className=" w-[45px] h-[45px] ">
              <img src="src/image/Theme.png " alt="" className="w-[28px]" />
            </div>
            <div className="ml-[20px] text-xl">
              <h2 className="text-white text-lg font-semibold">Theme</h2>
            </div>
          </div>
          <div className="w-full h-[60px] flex p-[30px] pt-[20px] ml-1 mt-0 hover:cursor-pointer">
            <div className=" w-[45px] h-[45px] ">
              <img
                src="src/image/Setting.png "
                alt=""
                className="w-[28px] ml-1 m-[2px]"
              />
            </div>
            <div className="ml-[20px] text-xl">
              <h2 className="text-white text-lg font-semibold">Settings</h2>
            </div>
          </div>
        </div>
        <div>
          <button
            className="w-64 bg-red-600 rounded-3xl text-white h-12 mt-3"
            onClick={handleClickOpen}
          >
            Create Reels
          </button>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        BackdropProps={{ style: { backgroundColor: "rgba(0, 0, 0, 0.1)" } }}
      >
        {isLoading ? (
          <div className="w-full h-[300px] flex justify-center items-center bg-[#1c1c1c]">
            <Loadder></Loadder>
          </div>
        ) : (
          <DialogContent sx={{ bgcolor: "#1c1c1c" }}>
            {/* Video File Input */}
            <div className="my-4">
              <input
                accept="video/*"
                type="file"
                onChange={handleVideoChange}
                id="video-upload"
                style={{ display: "none" }}
              />
              <label
                htmlFor="video-upload"
                className="flex justify-center items-center"
              >
                <IconButton
                  color="primary"
                  aria-label="upload video"
                  component="span"
                >
                  <AddPhotoAlternate fontSize="large" />
                </IconButton>
              </label>

              {/* Video Preview */}
              {videoPreview && (
                <div className="mt-4">
                  <video
                    controls
                    src={videoPreview}
                    className="w-full h-auto rounded-md shadow-md"
                  />
                </div>
              )}
            </div>

            {/* Description Input */}
            <TextField
              label="Description"
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              variant="filled"
              fullWidth
              className="mt-4"
              InputProps={{
                className: "text-white", // For white text inside the input
                disableUnderline: true, // To remove the underline in filled variant
                style: {
                  backgroundColor: "rgba(255, 255, 255, 0.1)", // Optional: Light transparent background for contrast
                  // border: "1px solid white", // White border
                  color: "white",
                  borderRadius: "4px",
                },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
            />
          </DialogContent>
        )}

        {/* Upload and Cancel Buttons */}
        <DialogActions sx={{ bgcolor: "#1c1c1c" }}>
          <Button onClick={handleClose} variant="contained">
            Cancel
          </Button>
          <Button
            onClick={handleUpload}
            color="inherit"
            variant="contained"
            className="bg-green-500 hover:bg-green-400"
            disabled={!videoFile}
          >
            Upload Reel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Lsidebar;
