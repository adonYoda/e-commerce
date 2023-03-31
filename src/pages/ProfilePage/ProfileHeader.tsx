import { Avatar, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { store, useAppSelector } from "src/strore_api/configureStore";
import { authUser, logOut } from "src/strore_api/token/authSlice";
import { useGetUserInfoQuery } from "src/strore_api/user/userApi";
import { deleteUser } from "src/strore_api/user/userSlice";
import { homePath } from "src/utils/constants/routes.constants";
import { fakeBaseUrl } from "src/utils/constants/temp.constans";

const HeaderWrapper = styled("div")((theme) => ({
  display: "flex",
  flexDirection: "row",
  marginBottom: "20px",
}));

const LogoutButton = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.placeholder};
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.palette.primary.dark};
  }
  margin-top: 5px;
`;
const NameWrapper = styled("div")((theme) => ({
  display: "flex",
  flexDirection: "column",
  margin: "auto 0",
}));

const ProfileHeader = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(deleteUser());
    dispatch(logOut());
    navigate(homePath);
  };

  //const {data, error} = useGetUserInfoQuery(userId);

  return (
    <HeaderWrapper>
      <Avatar
        sx={{
          bgcolor: "#F1F4FA",
          width: "56px",
          height: "56px",
          marginRight: "15px",
        }}
      >
        <Typography variant="h5" color="primary">
          {user.firstName[0] + user.lastName[0]}
        </Typography>
      </Avatar>
      <NameWrapper>
        <Typography variant="caption1" sx={{ cursor: "default" }}>
          {user.firstName + " " + user.lastName}
        </Typography>
        <LogoutButton variant="caption4" onClick={handleLogout}>
          Logout
        </LogoutButton>
      </NameWrapper>
    </HeaderWrapper>
  );
};

export default ProfileHeader;
