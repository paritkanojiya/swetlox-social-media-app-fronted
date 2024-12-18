import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  CircularProgress,
  Fade,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { privateApi } from "./utils/api";
import Loadder from "./loadder/Loadder";

// Dummy data
const dummyReels = [
  {
    id: "1",
    title: "Dance Compilation",
    description: "A compilation of the best dance moves.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "2",
    title: "Cooking Tutorial",
    description: "Learn how to cook a delicious meal.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "3",
    title: "Travel Vlog",
    description: "Highlights from my recent travels.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

function BookMark() {
  const [savedPosts, setSavedPosts] = useState([]);
  const [savedReels, setSavedReels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSavedItems = async () => {
      try {
        const { data } = await privateApi.get("/post/bookmark-post");
        setSavedPosts(data);
        setSavedReels(dummyReels);
      } catch (error) {
        console.error("Error fetching saved items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedItems();
  }, []);

  const handleDeletePost = async (postId) => {
    try {
      await privateApi.delete(`/post/bookmark-delete/${postId}`);
      console.log(postId);
      setSavedPosts((prevPosts) =>
        prevPosts.filter((post) => post?.postId !== postId && post != null)
      );
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  if (loading) {
    return (
      <div className="w-[100%] h-[100%] flex justify-center item-center">
        <Loadder></Loadder>
      </div>
    );
  }

  return (
    <Box
      sx={{
        padding: 3,
        width: "700px",
        maxWidth: 1200,
        marginLeft: "405px",
        bgcolor: "#1c1c1c",
        marginTop: "100px",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ mb: 4, color: "#333", fontWeight: "bold", color: "white" }}
      >
        Saved Posts
      </Typography>
      <Grid container spacing={3}>
        {savedPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post?.postId}>
            <Fade in={true} timeout={500}>
              <Card
                sx={{
                  maxWidth: 345,
                  height: 340,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                  },
                  borderRadius: 2,
                  bgcolor: "background.paper",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={post ? post.postURL : ""}
                  alt={post ? post.title : "This post is invalid or deleted"}
                  sx={{
                    transition: "opacity 0.3s",
                    "&:hover": {
                      opacity: 0.8,
                    },
                    height: "200px",
                  }}
                />
                <CardContent>
                  <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                    {post?.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post ? post.caption : ""}
                  </Typography>
                </CardContent>
                <IconButton
                  sx={{ position: "absolute", top: 5, right: 5 }}
                  onClick={() => handleDeletePost(post.postId)}
                >
                  <DeleteIcon sx={{ color: "red" }} />
                </IconButton>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default BookMark;
