import { useState } from "react";
import Loadder from "../loadder/Loadder";
import { privateApi } from "../utils/api";

const ProfilePhoto = ({ style, imgURL }) => {
  const [loadding, setLoading] = useState(false);
  const handleProfileImageChange = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      setLoading(true);
      await privateApi.post("/user/change-profile-image", formData);
      window.location.reload();
    } catch (ex) {
    } finally {
      setLoading(false);
    }
  };
  if (loadding) {
    return <Loadder></Loadder>;
  }
  return (
    <>
      <label
        htmlFor="profile-logo"
        style={style}
        className="rounded-full  cursor-pointer"
      >
        <img
          src={imgURL}
          className="object-cover  w-[100%] h-[100%] rounded-full"
          title="change profile"
        ></img>
      </label>
      <input
        className="hidden"
        type="file"
        id="profile-logo"
        onChange={(e) => handleProfileImageChange(e.target.files[0])}
      ></input>
    </>
  );
};
export default ProfilePhoto;
