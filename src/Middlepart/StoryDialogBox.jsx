import React, { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
  Avatar,
  LinearProgress,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const StoryDialogBox = ({ open, handleClose, story }) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0); // Current story index
  const [progress, setProgress] = useState(0); // Current progress for the active story
  const timerRef = useRef(null);

  const storyDuration = 5000; // 5 seconds for each image
  const totalStories = story.storyList.length;

  // Start progress for the current story (image)
  const startProgress = () => {
    setProgress(0);
    const intervalDuration = storyDuration / 100; // Interval to update progress bar

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timerRef.current);
          handleNextStory();
          return 0;
        }
        return prev + 1;
      });
    }, intervalDuration);
  };

  // Go to next story
  const handleNextStory = () => {
    if (currentStoryIndex < totalStories - 1) {
      setCurrentStoryIndex((prevIndex) => prevIndex + 1);
      setProgress(0);
    } else {
      handleClose(); // Close when all stories are viewed
    }
  };

  // Go to previous story
  const handlePrevStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex((prevIndex) => prevIndex - 1);
      setProgress(0);
    }
  };

  useEffect(() => {
    if (open) {
      startProgress();
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [currentStoryIndex, open]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          width: "350px", // Reduced width for the dialog to be more like Instagram stories
          height: "700px", // Adjust height if needed
          backgroundColor: "black",
          position: "relative",
        },
      }}
    >
      <DialogTitle sx={{ padding: "8px", backgroundColor: "black" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            <Avatar
              src={story.profileURL}
              sx={{ marginRight: 1, width: 40, height: 40 }}
            />
            <Typography variant="body1" sx={{ color: "white" }}>
              {story.userName || "User"}
            </Typography>
          </Box>
          <IconButton onClick={handleClose} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      {/* Progress bar container */}
      <Box
        display="flex"
        justifyContent="space-between"
        padding="8px"
        marginBottom="8px"
      >
        {story.storyList.map((_, index) => (
          <LinearProgress
            key={index}
            variant="determinate"
            value={
              index === currentStoryIndex
                ? progress
                : index < currentStoryIndex
                ? 100
                : 0
            }
            sx={{
              width: `${100 / totalStories}%`,
              margin: "0 2px",
              height: 3,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "white",
              },
            }}
          />
        ))}
      </Box>

      <DialogContent
        sx={{
          padding: 0,
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90%",
        }}
      >
        {/* Image display */}
        <img
          src={story.storyList[currentStoryIndex]}
          alt="story"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </DialogContent>

      {/* Clickable areas for navigating stories */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Previous story area */}
        <Box
          sx={{ width: "50%", height: "100%", cursor: "pointer" }}
          onClick={handlePrevStory}
        />
        {/* Next story area */}
        <Box
          sx={{ width: "50%", height: "100%", cursor: "pointer" }}
          onClick={handleNextStory}
        />
      </Box>
    </Dialog>
  );
};

export default StoryDialogBox;
