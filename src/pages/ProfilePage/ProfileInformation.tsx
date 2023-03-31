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
import theme from "src/utils/theme/theme";

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

const MyInput = styled(Input)((theme) => ({
  fontSize: "15px",
  lineHeight: "23px",
  letterSpacing: "-0.6px",
}));

const MyTypography = styled(Typography)(({ theme }) => ({
  marginTop: "15px",
  marginBottom: "5px",
  color: `${theme.palette.text.disabled}`,
  cursor: "default"
}));



const ProfileInformation = () => {
  const user = useAppSelector((store) => store.user);
  const [flag, setFlag] = useState(false);
  const [globalFlag, setGlobalFlag] = useState(false)

  return (
    <WrapperProfileInformation>
      <Wrapper>
        <Typography
          sx={{ color: `${theme.palette.text.disabled}`, cursor: "default" }}
          variant="caption4"
          
        >
          Email
        </Typography>
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
        <Typography variant="body15" sx={{ cursor: "default" }}>
          {user.email}
        </Typography>
      )) || <MyInput autoFocus={true} defaultValue={user.email} id="email" />}

      <MyTypography variant="caption4">Phone</MyTypography>
      {(!flag && (
        <Typography variant="body15" sx={{ cursor: "default" }}>
          {user.phone}
        </Typography>
      )) || <MyInput defaultValue={user.phone} id="phone" />}
      {
        <Typography
        color="primary"
        variant="caption4"
        sx={{ cursor: "pointer" }}
      >
        +Add
      </Typography>
      }
      <MyTypography variant="caption4">Address</MyTypography>
      {(!flag && (
        <Typography variant="body15" sx={{ cursor: "default" }}>
          {user.address.fullAddress}
        </Typography>
      )) || <MyInput defaultValue={user.address.fullAddress} id="address" />}

      <MyTypography variant="caption4">Card</MyTypography>
      {(!flag && (
        <Typography variant="body15" sx={{ cursor: "default" }}>
          {user.cards[0]}
        </Typography>
      )) || <MyInput defaultValue={user.cards[0]} id="card" />}
    </WrapperProfileInformation>
  );
};

export default ProfileInformation;
