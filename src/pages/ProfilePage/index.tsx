import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import Orders from "./Orders";
import Profile from "./Profile";

const MainContainer = styled(Container)(({ theme }) => ({
  //backgroundColor: "blue",
  width: "100%",
  height: "content",
  display: "flex",
  flexDirection: "row",
}));

const MyBoxProfile = styled("div")(({ theme }) => ({
  width: "30%",
  height: "380px",
  //borderColor: theme.palette.grey['A200'],
  border: `1px solid ${theme.palette.grey.A200}`,
  borderRadius: "10px",
}));

const OrdersBox = styled("div")``;

const ProfilePage = () => {
  return (
    <MainContainer>
      <MyBoxProfile>
        <Profile />
      </MyBoxProfile>

      <OrdersBox>
        <Orders />
      </OrdersBox>
    </MainContainer>
  );
};

export default ProfilePage;
