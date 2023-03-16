import { Box, Divider } from "@mui/material";
import { Container, styled } from "@mui/system";
import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileInformation from "./ProfileInformation";

const MyProfile = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: "10px",
 // backgroundColor: "#cfe8fc",
  height: "100%",
  padding: "24px",
}));

const ProfileHeaderWrapper = styled("div")(({ theme }) => ({
  height: "25%",
}));

const ProfileInformationWrapper = styled("div")(({ theme }) => ({}));

const Profile = () => {
  return (
    <MyProfile>
      <ProfileHeaderWrapper>
        <ProfileHeader />
      </ProfileHeaderWrapper>
      <Divider variant="middle" />
      <ProfileInformationWrapper>
        <ProfileInformation/>
      </ProfileInformationWrapper>
    </MyProfile>
  );
};

export default Profile;
