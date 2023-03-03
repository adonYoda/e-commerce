import {
  Alert,
  AlertTitle,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { FC, useState } from "react";
import { authSignUpPath } from "src/utils/constants/routes.constants";
import AuthContent from "../../components/Auth/AuthContent";
import { ReactComponent as Visibility } from "../../assets/icons/Base/eye.svg";
import { ReactComponent as VisibilityOff } from "../../assets/icons/Base/eye-slash.svg";
import { AuthContainer, ContainerStyled, LostPassword } from "./Auth.styled";
import { Stack } from "@mui/system";
import { useLoginUserMutation } from "src/strore_api/user/userApi";
import { useForm } from "react-hook-form";
import { emailRegex } from "src/utils/constants/temp.constans";
import { ILoginForm } from "src/types";
import { useDispatch } from "react-redux";
import { putUser } from "src/strore_api/user/userSlice";

const Form = styled("form")`
  display: flex;
  gap: 16px;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

interface Props {}

const AuthSignIn: FC<Props> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    resetField,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = React.useState(false);
  const [handlerError, setHandlerError] = useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const authContent = {
    title: "Sign In",
    topDescription: {
      text: "Don't have an account?",
      link: "Sign up",
      linkUrl: authSignUpPath,
    },
  };

  //==================Logic API of SigIn================================
  const [loginUser, { data: loginData, isSuccess: isLoginSuccess, isError }] =
    useLoginUserMutation();

  const onSubmit = async (data: ILoginForm) => {
    try {
      const user = await loginUser({
        email: data.email,
        password: data.password,
      }).unwrap();
      dispatch(putUser(user));
      console.log(user);
    } catch (error: any) {
      console.log(error);
      if (error.code === 404) {
      }
      if (error.code === 404) {
        setHandlerError("Wrong password");
        resetField("password");
      }
      if (error.code === 401) {
        setHandlerError("Wrong login or password");
        resetField("password");
      }
      if (error.code === 403) {
        setHandlerError("Access denied");
        resetField("password");
      }
    }
    reset();
  };

  //================================================================

  return (
    <AuthContainer>
      <ContainerStyled>
        <AuthContent {...authContent}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              fullWidth
              label="Email"
              {...register("email", {
                required: true,
                pattern: emailRegex,
              })}
            />
            {errors?.email?.type === "pattern" && (
              <Typography>Please enter a valid email address</Typography>
            )}
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                {...register("password", {
                  required: true,
                })}
              />
              {handlerError && (
                <Typography color="error">{handlerError}</Typography>
              )}
            </FormControl>
            <Button variant="contained" type="submit" disabled={!isValid}>
              Login
            </Button>
            <LostPassword variant="caption4">Lost your password?</LostPassword>
          </Form>
        </AuthContent>
      </ContainerStyled>
    </AuthContainer>
  );
};

export default AuthSignIn;
