import {
  Avatar,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { privateApi } from "../utils/api";

const SearchUser = ({ user }) => {
  const [text, setText] = useState();
  const isFollowing = user.following;
  const isFollower = user.follower;
  const userIsFollowingAuth = user.userIsFollowingAuth;
  const handleFollow = async (userId) => {
    if (text !== "Following") {
      setText("Following");
      await privateApi.get(`/user/acceptRequest/${userId}`);
    }
  };
  useEffect(() => {
    if (!isFollowing && !userIsFollowingAuth) setText("Follow");
    else if (!isFollowing && userIsFollowingAuth) setText("Follow Back");
    else if (isFollowing) {
      setText("Following");
    }
  }, [user]);
  return (
    <ListItem
      key={user.userId}
      sx={{
        color: "#fff",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <ListItemAvatar>
          <Avatar src={user.profileURL} alt={user.userName} />
        </ListItemAvatar>
        <ListItemText
          primary={user.userName}
          secondary={`@${user.fullName}`}
          className="flex items-center"
        />
      </Box>
      <Box>
        {!isFollowing && !userIsFollowingAuth && (
          <Button
            onClick={() => handleFollow(user.userId)}
            variant="contained"
            sx={{
              bgcolor: "#ff3d00",
              color: "#fff",
              "&:hover": {
                bgcolor: "#ff6347",
              },
            }}
          >
            {text}
          </Button>
        )}
        {!isFollowing && userIsFollowingAuth && (
          <Button
            variant="contained"
            sx={{
              bgcolor: "#ff3d00",
              color: "#fff",
              "&:hover": {
                bgcolor: "#ff6347",
              },
            }}
            onClick={() => handleFollow(user.userId)}
            // Add onClick logic to follow back the user
          >
            {text}
          </Button>
        )}
        {isFollowing && (
          <Typography
            variant="body2"
            sx={{
              color: "#fff",
              fontStyle: "italic",
            }}
          >
            Following
          </Typography>
        )}
      </Box>
    </ListItem>
  );
};

export default SearchUser;
