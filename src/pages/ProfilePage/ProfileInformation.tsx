import {
  Box,
  FormControl,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "src/strore_api/configureStore";

const Wrapper = styled("div")((theme) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

const WrapperProfileInformation = styled("div")((theme) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "20px",
  marginBottom: "30px",
}));

const MyInput = styled(Input)((theme) => ({}));

const ProfileInformation = () => {
  const user = useAppSelector((store) => store.user);
  const [flag, setFlag] = useState(false);

  return (
    <WrapperProfileInformation>
      <Wrapper>
        <InputLabel shrink htmlFor="email">
          Email
        </InputLabel>
        <Typography
          color="primary"
          variant="caption4"
          sx={{ cursor: "pointer" }}
          onClick={() => setFlag((flag) => !flag)}
        >
          Edit
        </Typography>
      </Wrapper>
      {(!flag && (
        <Typography sx={{ cursor: "default" }}>{user.email}</Typography>
      )) || <MyInput defaultValue={user.email} id="email" />}

      <InputLabel shrink htmlFor="phone">
        Phone
      </InputLabel>
      {(!flag && (
        <Typography sx={{ cursor: "default" }}>{user.phone}</Typography>
      )) || <MyInput defaultValue={user.phone} id="phone" />}
      <InputLabel shrink htmlFor="address">
        Address
      </InputLabel>
      {(!flag && (
        <Typography sx={{ cursor: "default" }}>
          {user.address.fullAddress}
        </Typography>
      )) || <MyInput defaultValue={user.address.fullAddress} id="address" />}

      <InputLabel shrink htmlFor="card">
        Card
      </InputLabel>
      {(!flag && (
        <Typography sx={{ cursor: "default" }}>{user.cards[0]}</Typography>
      )) || <MyInput defaultValue={user.cards[0]} id="card" />}
    </WrapperProfileInformation>
  );
};

export default ProfileInformation;
