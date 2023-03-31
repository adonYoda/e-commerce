import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import { useGetOrdersQuery } from "src/strore_api/orders/ordersApi";
import Orders from "./Orders";
import Profile from "./Profile";

const MainContainer = styled(Container)(({ theme }) => ({
  width: "100%",
  minHeight: "975px",
  display: "flex",
  flexDirection: "row",
}));

const MyBoxProfile = styled("div")(({ theme }) => ({
  width: "30%",
  height: "400px",
  border: `1px solid ${theme.palette.grey.A200}`,
  borderRadius: "10px",
}));

const OrdersBox = styled("div")(({theme})=>({
  minWidth: '70%',
  marginLeft: '80px'
}))



const ProfilePage = () => {

  const {data = [], isError, isLoading} = useGetOrdersQuery('')


  return (
    <MainContainer>
      <MyBoxProfile>
        <Profile />
      </MyBoxProfile>

      <OrdersBox>
        <Orders data={data} />
      </OrdersBox>
    </MainContainer>
  );
};

export default ProfilePage;
