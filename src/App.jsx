import React, { Children, useEffect, useState } from "react";
import Lsidebar from "./Lsidebar/Lsidebar";
import Navbar from "./Navbar/Navbar";
import Rsidebar from "./Rsidebar/Rsidebar";
import Middlepart from "./Middlepart/Middlepart";
import Reels from "./Reels";
// import Fullchat from "./Chat/Fullchat";
import Chatapp from "./Chat/Chatapp";
import Messagebar from "./Chat/Messagebar";
import { Outlet, useLocation } from "react-router-dom";
import Profile from "./Profile/Profile";
import { privateApi } from "./utils/api";
import Signin from "./Signin";
import Loadder from "./loadder/Loadder";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "./reducer/userReducer";
import { connect } from "./utils/webSocketConnection";
import AdminDashboard from "./admin/AdminDashboard";

function App() {
  const userDetails = useSelector((state) => state.userDetails);
  const isAuthenticated = useSelector(
    (state) => state.userDetails.isAuthenticated.payload
  );
  const isLoading = useSelector((state) => state.userDetails.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    const authStatus = async () => {
      try {
        const { data } = await privateApi.get("/user/auth-status");
        dispatch(userAction.setIsAuthenticated(true));
        dispatch(userAction.setUserDetails(data));
        dispatch(userAction.setLoading(false));
        connect();
      } catch (ex) {
        dispatch(userAction.setLoading(false));
        dispatch(userAction.setIsAuthenticated(false));
      }
    };
    authStatus();
  }, []);
  if (isLoading) {
    return (
      <div className="w-[100vw] h-[100vh] flex justify-center items-center">
        <Loadder></Loadder>
      </div>
    );
  }
  console.log(userDetails);
  if (!isAuthenticated) {
    return <Signin></Signin>;
  }

  return (
    <>
      <Navbar />
      {userDetails.user.roleList[0].role != "ROLE_ADMIN" ? (
        <div className="flex">
          <Lsidebar />
          <Outlet></Outlet>
          <Rsidebar />
        </div>
      ) : (
        <AdminDashboard></AdminDashboard>
      )}
    </>
  );
}

export default App;
