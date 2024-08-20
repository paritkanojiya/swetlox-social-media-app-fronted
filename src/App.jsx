import React, { useState } from 'react';
import Lsidebar from "./Lsidebar/Lsidebar";
import Navbar from "./Navbar/Navbar";
import Rsidebar from "./Rsidebar/Rsidebar";
import Middlepart from "./Middlepart/Middlepart";
import Reels from "./Reels";
// import Fullchat from "./Chat/Fullchat";
import Chatapp from "./Chat/Chatapp";
import Messagebar from './Chat/Messagebar';

function App() {
  const [activeComponent, setActiveComponent] = useState('Middlepart');

  const reelsData = [
    {
      videoUrl: 'src/Videos/Reel3.mp4',
      profileImg: 'src/image/profile.jpg',
      username: 'aaary.1',
      likes: 120,
      comments: 45
    },
    {
      videoUrl: 'src/Videos/Reel2.mp4',
      profileImg: 'src/image/profile.jpg',
      username: 'aaary.per',
      likes: 250,
      comments: 70
    },
    {
      videoUrl: 'src/Videos/Reel1.mp4',
      profileImg: 'src/image/profile.jpg',
      username: 'aaary.per',
      likes: 250,
      comments: 70
    },
  ];

  console.log(`Active Component: ${activeComponent}`);

  return (
    <>
      <Navbar />
      <div className="flex">
        <Lsidebar setActiveComponent={setActiveComponent} />
        <div className="flex-1">
          {activeComponent === 'Middlepart' && <Middlepart />}
          {activeComponent === 'Reels' && <Reels reels={reelsData} />}
          {activeComponent === 'Messagebar' && <Messagebar />}
        </div> 
        <Rsidebar />
      </div>
    </>
  );
}

export default App;
