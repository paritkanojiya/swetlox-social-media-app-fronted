# Swetlox Social Media App

Swetlox is a social media platform where users can connect, share posts, and interact with others through comments, likes, and real-time notifications. The app offers a seamless user experience with features inspired by popular social media platforms.

## Features

- **User Authentication**: 
  - Users can sign up, log in, and securely authenticate via JWT.
  - Forgot password functionality with email-based reset link.

- **User Profile**: 
  - Users can create and edit their profiles, including personal information, profile pictures, and bio.
  - View profile details and posts of other users.

- **Posts**:
  - Users can create, view, like, and comment on posts.
  - Upload multimedia posts such as images and videos.

- **Reels**:
  - View and interact with short video clips (Reels).
  - Like, comment, and share Reels.

- **Stories**:
  - Post and view stories that disappear after 24 hours.
  - Users can interact with stories through reactions.

- **Real-Time Notifications**:
  - Receive notifications for post likes, comments, and new followers in real-time.

- **Follow/Unfollow**:
  - Users can follow and unfollow other users to keep up with their content.
  - Get notified when a user follows you.

- **Chat**:
  - Real-time messaging with users.
  - Group chat support for multiple users to interact.

- **Search**:
  - Search users, posts, and Reels easily using a search bar.
  - Filter results based on specific criteria.

- **Admin Dashboard**:
  - Admin can manage users, posts, and reports from a dedicated dashboard.
  - Ability to ban users, delete posts, and moderate content.

- **Responsive Design**:
  - The app is fully responsive, ensuring a great experience on desktop and mobile devices.

## Technologies Used
- **Frontend**: React, Vite, Material-UI
- **Backend**: Spring Boot, JWT Authentication
- **Database**: MongoDB
- **Real-Time**: WebSockets for notifications and real-time chat
- **Other**: Kafka for message passing
