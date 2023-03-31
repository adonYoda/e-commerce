import {
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
  Typography,
} from "@mui/material";
import React, { FC, useState } from "react";
import { IOrder } from "src/types";
import { ReactComponent as Icon} from '../../assets/icons/Navigation/angle-down.svg'
import Order from "./Order";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface Props  {
  data : IOrder[]
}

const filters = ["all", "On the way", "Done", "Canceled"];

const HeaderOrders = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  marginBottom: '30px'
}));

const OrdersWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: 'flex',
  flexDirection: "column",
  rowGap: '20px',
  marginBottom: '50px'
}))

const Orders : React.FC<Props>  = ({data}) => {
  const [filter, setFilter] = useState("all");

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string);
  };

  return (
    <>
    <HeaderOrders>
      <Typography variant="h3">Orders</Typography>
      <FormControl sx={{ minWidth: 120 }} size="small">
        <Select value={filter} displayEmpty onChange={handleChange} MenuProps={MenuProps} IconComponent={Icon}>
          {filters.map((filter) => (
            <MenuItem value={filter} key={filter}>
              <Typography variant="caption3" >{filter}</Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </HeaderOrders>
            <OrdersWrapper>
              {data.filter(item => item.statusOfOrder === filter).map((order)=>(
                <Order key={order.orderNumber} order={order}/>
              ))}
            </OrdersWrapper>
    </>
  );
};

export default Orders;
