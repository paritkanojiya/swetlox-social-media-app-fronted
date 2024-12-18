import { Avatar, CardHeader, Box } from "@mui/material";
import { red } from "@mui/material/colors";

const NotificationHeader = ({ userName, message, rightImage }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
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
        title={userName}
        subheader={message}
      />
      {rightImage && (
        <Box
          component="img"
          src={rightImage}
          alt="Right Side Image"
          sx={{ height: 40, width: 40 }}
        />
      )}
    </Box>
  );
};

export default NotificationHeader;
