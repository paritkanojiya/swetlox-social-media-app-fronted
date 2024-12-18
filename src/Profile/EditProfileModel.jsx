import { Box, Button, Modal } from "@mui/material";
import { useRef, useState } from "react";
import Loadder from "../loadder/Loadder";
import { privateApi } from "../utils/api";
import PostHeader from "./PostHeader";
import ProfilePhoto from "./ProfilePhoto";

const imageStyle = {
  width: "70px",
  height: "70px",
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "#1c1c1c",
  boxShadow: 24,
  padding: "10px",
};
const profilePhotoStyle = {
  width: "50px",
  height: "50px",
};
const EditProfileModel = ({ open, handleClose, data }) => {
  const [loading, setLoading] = useState(false);
  const userNameRef = useRef();
  const bioRef = useRef();
  const handleUpdate = async () => {
    const userName = userNameRef.current.value;
    const bio = bioRef.current.value.split("\n");
    const formData = new FormData();
    if (userName != null) formData.append("userName", userName);
    if (bio != null) formData.append("bio", bio);
    try {
      setLoading(true);
      await privateApi.post("/user/update-profile", formData);
      window.location.reload();
    } catch (ex) {
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <div className="w-[100%] h-[100%] flex justify-center items-center">
        <Loadder></Loadder>
      </div>
    );
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="flex flex-col justify-center items-center text-white">
          <div className="flex gap-6 w-[100%] justify-start">
            <ProfilePhoto
              style={imageStyle}
              imgURL={data?.profileURL}
            ></ProfilePhoto>
            <div>
              <h1 className="font-bold text-sm">{data?.fullName}</h1>
              <p>@{data?.userName}</p>
            </div>
          </div>
          <div className="w-[100%] py-5">
            <p>User name:</p>
            <input
              type="text"
              className="outline-none border-2 p-2 border-white bg-transparent w-[100%] my-2"
              ref={userNameRef}
            ></input>
            <p>Bio :</p>
            <textarea
              rows={"3"}
              cols={"30"}
              className=" outline-none border-2 p-3 border-white bg-transparent resize-none w-[100%]  my-2"
              ref={bioRef}
            ></textarea>
            <Button
              sx={{ color: "white", border: "1px solid white" }}
              onClick={handleUpdate}
            >
              Update
            </Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};
export default EditProfileModel;
