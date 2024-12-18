import { useEffect, useState } from "react";
import { privateApi } from "../utils/api";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "#25252531",
    position: "relative",
    maxWidth: "600px",
    margin: "97px auto 0",
    overflow: "hidden",
  },
  header: {
    backgroundColor: "#252525",
    padding: "16px",
    color: "white",
    zIndex: 10,
    width: "100%",
    maxWidth: "600px",
  },
  chatList: {
    marginTop: "72px", // Offset the height of the fixed header
    height: "calc(100vh - 72px)", // Full viewport height minus header height
    overflowY: "auto",
    padding: "16px",
  },
  card: {
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      transform: "scale(1.02)",
      transition: "transform 0.2s ease-in-out",
    },
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    padding: "16px",
  },
  avatar: {
    marginRight: "16px",
  },
}));

const MidChatUser = () => {
  const [userConnection, setUserConnection] = useState([]);
  const classes = useStyles();
  const navigate = useNavigate();
  const fetchUserConnectionData = async () => {
    const { data } = await privateApi.get("/user/get-user-connection");
    setUserConnection(data);
  };

  useEffect(() => {
    fetchUserConnectionData();
  }, []);

  const handleChatOpen = (email) => {
    navigate("/chat?id=" + email);
  };

  return (
    <>
      <Box className={`${classes.container} w-[100%]`}>
        {/* Fixed Header */}
        <Box className={`${classes.header} fixed`}>
          <Typography variant="h5" component="div">
            Friends List
          </Typography>
          <Typography variant="subtitle1">
            Stay connected with your friends!
          </Typography>
        </Box>
        <Box className={`${classes.chatList}`}>
          <div className="overflow-y-scroll px-2 my-3 h-[70vh] scrollbar-hide scroll-smooth">
            {userConnection.map((user, index) => {
              const bgColor = index % 2 === 0 ? "bg-gray-100" : "bg-white";
              return (
                <Card
                  key={index}
                  className={`${classes.card} ${bgColor} my-2 cursor-pointer`}
                  onClick={() => handleChatOpen(user.email)}
                >
                  <Box className={classes.cardHeader}>
                    <Avatar
                      alt={user.userName}
                      src={user.profileURL}
                      className={`${classes.avatar} shadow-lg`}
                    />
                    <Box flexGrow={1}>
                      <Typography variant="h6">{user.userName}</Typography>
                      <Typography variant="body2">Hey' WhatsApp</Typography>
                    </Box>
                    <IconButton>
                      <ChatBubbleOutlineIcon />
                    </IconButton>
                  </Box>
                </Card>
              );
            })}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default MidChatUser;
