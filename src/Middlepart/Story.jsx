
import React, { useState } from 'react';
import Istory from './Istory';

function Story() {
  const [stories, setStories] = useState([
    {
      id: 1,
      storyImg: 'src/image/balcony.png',
      profileImg: 'src/image/profile.jpg',
    },
    {
      id: 2,
      storyImg: 'src/image/ss.png',
      profileImg: 'src/image/profile.jpg',
    },
  ]);

  const handleAddStory = () => {
    console.log('Add a new story');
  };

  return (
    <div className="w-full h-[193px] flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
      <div className="flex space-x-2">
        <Istory
          key="user-story"
          storyImg=""
          profileImg="src/image/userProfile.jpg"
          isUserStory={true}
          onAddStory={handleAddStory}
        />
        {stories.map(story => (
          <Istory
            key={story.id}
            storyImg={story.storyImg}
            profileImg={story.profileImg}
            isUserStory={false}
          />
        ))}
      </div>
    </div>
  );
}

export default Story;

