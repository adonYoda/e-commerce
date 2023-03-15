import { Box } from "@mui/material";
import { Container, styled } from "@mui/system";
import React from "react";

const MyProfile = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    paddingTop: '10px',
    backgroundColor: '#cfe8fc',
    height: '100%',
    padding: '24px'
  }));

const ProfileHeader = styled("div")(({ theme }) => ({
  height: "25%",
}));

const ProfileInformation = styled("div")(({ theme }) => ({
}));

const Profile = () => {
  return (
    <MyProfile>
     
        <ProfileHeader>Profile Main Information</ProfileHeader>
        <ProfileInformation>Profile Information</ProfileInformation>
     
    </MyProfile>
  );
};

export default Profile;
