import {
  alpha,
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  Stack,
  styled,
  TextField,
} from "@mui/material";
import React, { FC } from "react";
import theme from "src/utils/theme/theme";
//import styled from "styled-components";

import { ReactComponent as SearchIcon } from "../../assets/icons/Base/search.svg";
import { ReactComponent as BagIcon } from "../../assets/icons/Base/shopping-bag.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/Base/user.svg";
import SvgIcon from "../../components/globals/SvgIcon";
import { ReactComponent as LogoIcon } from "../../assets/icons/Base/logo.svg";
import { headerSize } from "src/utils/constants/sizes.constants";
import { categories } from "src/utils/constants/categories.constants";
import { useLocation, useMatch, useNavigate, useParams } from "react-router";
import {
  authSignInPath,
  homePath,
  productsNestPath,
  productsPath,
} from "src/utils/constants/routes.constants";
import useGetParams from "src/hooks/useGetParams";
import useGetLocation from "src/hooks/useGetLocation";
import { useAppSelector } from "src/strore_api/configureStore";

const StackStyled = styled(Stack)<{ dark?: string }>(({ theme, dark }) => ({
  position: "fixed",
  zIndex: "10",
  flexDirection: "row",
  alignItems: "center",
  padding: "0 30px 0 15px",
  width: "100%",
  height: headerSize.height,
  backgroundColor: dark ? "#17181f" : theme.palette.background.paper,
  borderBottom: `1px solid ${
    dark ? theme.palette.grey[800] : theme.palette.grey["A100"]
  }`,
  transition: "all 0.3s ease 0s",
  "& .MuiInputBase": {
    "&-root": {
      "& fieldset": {
        borderColor: dark
          ? theme.palette.grey[400]
          : theme.palette.grey["A200"],
        transition: "all 0.3s ease 0s",
      },
      "&:not(:has(input:focus)):hover fieldset": {
        borderColor: dark ? theme.palette.grey[600] : theme.palette.grey[400],
      },
      "&.Mui-focused fieldset": {
        filter: dark ? "invert(1)" : "invert(0)",
        borderColor: theme.palette.primary.main,
      },
    },
  },
}));

const MenuBar = styled("ul")<{ dark?: string }>(({ theme, dark }) => ({
  display: "flex",
  alignItems: "center",
  paddingLeft: "10px",
  marginRight: "auto",
  filter: dark ? "invert(1)" : "invert(0)",
}));
const MenuItem = styled("li")(({ theme }) => ({
  listStyle: "none",
}));
const SearchBar = styled("div")<{ dark?: string }>(({ theme, dark }) => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  filter: dark ? "invert(1)" : "invert(0)",
}));

const MyButton = styled(Button)<{ dark?: string; active?: string }>(
  ({ theme, dark, active }) => ({
    padding: "15px",
    color:
      active === "true"
        ? theme.palette.text.primary
        : theme.palette.text.secondary,
    filter: dark ? "invert(1)" : "invert(0)",
    "&:hover": {
      color: theme.palette.text.primary,
    },
  })
);

const Search = styled("div")(({ theme }) => ({
  marginRight: "10px",
}));

const SvgIconSearch = styled(SvgIcon)(({ theme }) => ({}));
SvgIconSearch.defaultProps = {
  color: `${theme.palette.text.secondary} !important`,
};

interface Props {
  dark?: string;
}

const AppBar: FC<Props> = ({ dark }) => {
  const navigate = useNavigate();
  const [categoryParam] = useGetLocation(productsPath);
  const isAuth = useAppSelector((state) => state?.auth?.authUser);

  const handleCheckAuth = () => {
    if (!isAuth) {
      navigate(authSignInPath);
    }else{
		navigate("<Profile/>")
	}
  };

  const handleClickCart = () => {
    if (!isAuth) {
		navigate(authSignInPath);
	  }else{
		navigate("<Cart/>")
	  }
  };

  return (
    <StackStyled dark={dark}>
      <MyButton dark={dark} onClick={() => navigate(homePath)}>
        <SvgIcon width={67} icon={<LogoIcon />} />
      </MyButton>
      <MenuBar dark={dark}>
        {categories.map((c) => (
          <MenuItem key={c.title}>
            <MyButton
              active={categoryParam === c.title ? "true" : "false"}
              onClick={() => navigate(productsPath + "/" + c.title)}
            >
              {c.title}
            </MyButton>
          </MenuItem>
        ))}
        <MenuItem>
          <MyButton>Blog</MyButton>
        </MenuItem>
      </MenuBar>
      <SearchBar dark={dark}>
        <Search>
          <TextField
            placeholder="Search"
            size="small"
            id="outlined-start-adornment"
            sx={{ width: "250px" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Search>
        <IconButton size="small" onClick={handleClickCart}>
          <SvgIcon size={20} icon={<BagIcon />} />
        </IconButton>
        <IconButton size="small" onClick={handleCheckAuth}>
          <SvgIcon size={20} icon={<UserIcon />} />
        </IconButton>
      </SearchBar>
    </StackStyled>
  );
};

export default AppBar;
