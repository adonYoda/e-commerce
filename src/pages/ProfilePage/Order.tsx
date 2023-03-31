import { Chip, Divider, styled, Typography } from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { IOrder } from "src/types";
import theme from "src/utils/theme/theme";
import Product from "./Product";

const OrderWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  height: "257px",
  border: `1px solid ${theme.palette.grey.A200}`,
  borderRadius: "10px",
  paddingLeft: "30px",
  paddingRight: "30px",
}));

const OrderHeader = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: "24px",
}));

const HeaderLeft = styled("div")(({ theme }) => ({
  display: "flex",
  marginTop: "25px",
  flexDirection: "column",
}));

const HeaderRight = styled("div")(({ theme }) => ({
  marginTop: "27px",
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
}));

const StyledChip = styled(Chip)<{ status: string }>(({ status }) => ({
  background:
    status === "On the way"
      ? "#F1F4FA"
      : status === "Done"
      ? "rgba(144, 218, 26, 0.1)"
      : status === "Canceled"
      ? "rgba(255, 78, 78, 0.1)"
      : "#fff",
  color:
    status === "On the way"
      ? theme.palette.primary.main
      : status === "Done"
      ? theme.palette.success.main
      : status === "Canceled"
      ? theme.palette.error.main
      : "#000",
  height: "24px",
}));

const LeftWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
}));

const GoodsWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    overflowX: "auto",
    "&::-webkit-scrollbar": {
      width: "10px",
      backgroundColor: "#f9f9fd",
    },
    "&::-webkit-scrollbar-thumb": {
        borderRadius: "5px",
        backgroundColor: theme.palette.primary.main
    },
    "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 6px rgba(0,0,0,0.2)",
        borderRadius: "5px",
        backgroundColor: "#f9f9fd"
      }
  }));


interface Props {
  order: IOrder;
}

const Order: React.FC<Props> = ({ order }) => {
  let tempDate = moment(order.dateOfOrder);
  const dateOrder = tempDate.format("LL");
  tempDate = moment(order.dateOfDelivery);
  const dateDelivery = tempDate.format("LL");
  return (
    <OrderWrapper>
      <OrderHeader>
        <HeaderLeft>
          <LeftWrapper>
            <Typography
              sx={{ marginRight: "15px", fontWeight: 500, cursor: "default" }}
              variant="caption1"
            >
              №{order.orderNumber}-{dateOrder}
            </Typography>
            <StyledChip
              status={order.statusOfOrder}
              label={order.statusOfOrder}
            />
          </LeftWrapper>
          <Typography
            variant="caption4"
            sx={{
              fontWeight: 400,
              color: theme.palette.text.placeholder,
              cursor: "default",
            }}
          >
            Delivery: {dateDelivery}
          </Typography>
        </HeaderLeft>
        <HeaderRight>
          <Typography variant="caption2" sx={{ fontWeight: 500 }}>
            $150
          </Typography>
          <Typography
            variant="caption4"
            sx={{
              fontWeight: 400,
              color: theme.palette.text.placeholder,
              cursor: "default",
            }}
          >
            Payed by card
          </Typography>
        </HeaderRight>
      </OrderHeader>
      <Divider />
      <GoodsWrapper>
        {order.purchasedGoods.map((product) => (
          <Product key={product.productId} product={product} />
        ))}
      </GoodsWrapper>
    </OrderWrapper>
  );
};

export default Order;
