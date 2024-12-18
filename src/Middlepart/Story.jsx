import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { privateApi } from "../utils/api";
import AddStoryDialog from "./AddStroy";
import Istory from "./Istory";
import StoryDialogBox from "./StoryDialogBox";

function Story() {
  const profileURL = useSelector((state) => state.userDetails.user.profileURL);
  const [stories, setStories] = useState([]);
  const [authStroy, setAuthStory] = useState([]);
  const [authStroyOpen, setAuthStoryOpen] = useState(false);
  const [authStroyCurrentIndex, setAuthStoryCurrentIndex] = useState(0);
  const fetchStoryData = async () => {
    try {
      const { data } = await privateApi.get("/story/get-connection-story");
      setStories(data);
    } catch (ex) {}
  };

  const fetchAuthStory = async () => {
    const { data } = await privateApi.get("/user/get-story");
    console.log(data);
    setAuthStory([data]);
  };
  useEffect(() => {
    fetchStoryData();
    fetchAuthStory();
  }, []);
  const [open, setOpen] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [addStory, setAddStory] = useState(false);

  const handleClickOpen = (index) => {
    setCurrentStoryIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseStrory = () => {
    setAddStory(false);
  };

  const handleAuthStoryOpen = (index) => {
    setAuthStoryCurrentIndex(index);
    setAuthStoryOpen(true);
  };
  const handleAuthStoryClose = () => {
    setAuthStoryOpen(false);
  };
  return (
    <div className="w-full h-[193px] flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
      <div className="flex space-x-2">
        <div onClick={() => setAddStory(true)}>
          <Istory
            key="user-story"
            storyImg={profileURL}
            profileImg={profileURL}
            isUserStory={true}
          />
        </div>
        <AddStoryDialog open={addStory} handleClose={handleCloseStrory} />
        {Array.isArray(authStroy) &&
          authStroy[0]?.storyList.length > 0 &&
          authStroy.length > 0 &&
          authStroy.map((story, index) => (
            <div key={index} onClick={() => handleAuthStoryOpen(index)}>
              <Istory
                storyImg={story.profileURL}
                profileImg={story.profileURL}
                isUserStory={false}
                userName={story.userName}
              />
            </div>
          ))}
        {stories.map((story, index) => (
          <div key={index} onClick={() => handleClickOpen(index)}>
            <Istory
              storyImg={story.profileURL}
              profileImg={story.profileURL}
              isUserStory={false}
              userName={story.userName}
            />
          </div>
        ))}
        {authStroy.length > 0 && authStroyOpen && (
          <StoryDialogBox
            open={authStroyOpen}
            handleClose={handleAuthStoryClose}
            story={authStroy[authStroyCurrentIndex]}
          />
        )}
        {stories.length > 0 && open && (
          <StoryDialogBox
            open={open}
            handleClose={handleClose}
            story={stories[currentStoryIndex]}
          />
        )}
      </div>
    </div>
  );
}

export default Story;
