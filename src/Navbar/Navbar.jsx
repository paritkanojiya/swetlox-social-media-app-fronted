import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { privateApi } from "../utils/api";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Button,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationDialog from "../Notification";
import SearchUser from "./SearchUser";

function Navbar() {
  const { user } = useSelector((state) => state.userDetails);
  const [searchData, setSearchData] = useState(null);
  const [] = useState();

  const handleLogout = () => {
    let res = confirm("Are you sure you want to logout?");
    if (res) {
      localStorage.removeItem("auth");
      window.location.reload();
    }
  };

  const handleSearchUser = async (query) => {
    if (query) {
      const { data } = await privateApi.get(`/user/search-user?query=${query}`);
      setSearchData(data);
    } else {
      setSearchData(null);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "#152331",
        width: "100%",
        height: "80px",
        display: "flex",
        flexDirection: "row",
        px: 16,
        position: "fixed",
        top: 0,
        zIndex: 1000,
        alignItems: "center",
      }}
    >
      {/* Logo */}
      <Box sx={{ display: "flex", alignItems: "center", mr: "auto" }}>
        <img
          src="src/image/logo2.png"
          alt="Logo"
          style={{ width: "200px", cursor: "pointer" }}
        />
      </Box>

      {/* Centered Search Bar */}
      <Box
        component="form"
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <TextField
          placeholder="Search users..."
          variant="outlined"
          onChange={(e) => handleSearchUser(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#fff" }} />
              </InputAdornment>
            ),
            sx: {
              bgcolor: "#000",
              borderRadius: "50px",
              color: "#fff",
              width: "700px",
              maxWidth: "700px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ff3d00",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ff3d00",
              },
            },
          }}
          sx={{
            input: { color: "#fff" },
          }}
        />
        {searchData && (
          <List
            sx={{
              position: "absolute",
              top: "100%",
              left: "13%",
              width: "675px",
              maxHeight: "200px",
              bgcolor: "#000",
              borderRadius: "10px",
              overflowY: "auto",
              zIndex: 2000,
            }}
          >
            {searchData.map((user) => {
              return <SearchUser user={user}></SearchUser>;
            })}
          </List>
        )}
      </Box>
      <NotificationDialog></NotificationDialog>

      {/* Profile and Logout */}
      <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
        <Button
          onClick={handleLogout}
          startIcon={<ExitToAppIcon />}
          sx={{
            bgcolor: "#ff3d00",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "50px",
            px: 4,
            "&:hover": {
              bgcolor: "#ff6347",
            },
          }}
        >
          Logout
        </Button>
        <NavLink to="/profile" style={{ marginLeft: "20px" }}>
          <Avatar
            src={user.profileURL}
            sx={{
              width: 50,
              height: 50,
              cursor: "pointer",
            }}
          />
        </NavLink>
      </Box>
    </Box>
  );
}

export default Navbar;
