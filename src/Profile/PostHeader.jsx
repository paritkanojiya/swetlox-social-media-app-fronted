import { Avatar, CardHeader, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const PostHeader = ({ userName, createdAt }) => {
  return (
    <CardHeader
      sx={{
        ".MuiCardHeader-subheader": {
          color: "white",
        },
        color: "white",
      }}
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          {userName.charAt(0).toUpperCase()}
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreHorizIcon className="text-white"></MoreHorizIcon>
        </IconButton>
      }
      title={userName}
      subheader={createdAt}
    />
  );
};
export default PostHeader;
