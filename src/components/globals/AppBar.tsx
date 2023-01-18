import { alpha, Button, Grid, InputBase, Stack, styled } from "@mui/material";
import React from "react";
import theme from "src/utils/theme/theme";
//import styled from "styled-components";

import { ReactComponent as Icon } from "../../assets/icons/Base/search.svg";
import {ReactComponent as BagIcon} from "../../assets/icons/Base/shopping-bag.svg"
import {ReactComponent as UserIcon} from "../../assets/icons/Base/user.svg";
import SvgIcon from "./SvgIcon";

const SearchBar = styled("div")(({theme})=>({
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    width: "20%",
    justifyContent: "space-around",
    margin: "auto"
}))

const MenuBar = styled("div")(({theme})=>({
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    width: "80%",
}))

const IconBar = styled("div")(({theme})=>({
    margin: "auto",
   
}))

const MyButton = styled(Button)(({theme})=>({
   color: "white",
}))



const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 
  alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));



const AppBar = () => {
  return (
    <Stack direction="row" alignItems="flex-start" justifyContent="space-between" sx={{width:"100%",
     backgroundColor:"#17181F"
     }} >
      <MenuBar>
        <MyButton>LOGO</MyButton>
        <MyButton >Men</MyButton>
        <MyButton >Women</MyButton>
        <MyButton >Kids</MyButton>
        <MyButton >Sale</MyButton>
        <MyButton >Collections</MyButton>
        <MyButton >Blog</MyButton>
      </MenuBar>
      <SearchBar>
        <Search>
          <SearchIconWrapper>
            <SvgIcon color="white" icon={<Icon />} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <IconBar>
        <SvgIcon color="white" icon={<BagIcon />} />
        <SvgIcon color="white" icon={<UserIcon />} />
        </IconBar>
      </SearchBar>
    </Stack>
  );
};

export default AppBar;
