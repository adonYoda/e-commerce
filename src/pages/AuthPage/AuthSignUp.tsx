import {
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
import { authSignInPath } from "src/utils/constants/routes.constants";
import AuthContent from "../../components/Auth/AuthContent";
import { AuthContainer, ContainerStyled, Link, Terms } from "./Auth.styled";
import { ReactComponent as Visibility } from "../../assets/icons/Base/eye.svg";
import { ReactComponent as VisibilityOff } from "../../assets/icons/Base/eye-slash.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRegisterForm } from "src/types";
import {
  emailRegex,
  nameRegex,
  passwordRegex,
} from "src/utils/constants/temp.constans";
import { putUser } from "src/strore_api/user/userSlice";
import { useDispatch } from "react-redux";
import { useRegisterUserMutation } from "src/strore_api/user/userApi";

const Form = styled("form")`
  display: flex;
  gap: 16px;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

interface Props {}

const AuthSignUp: FC<Props> = () => {
  //===================Logic API of SignUp==========================
  const [registerUser, { isError }] = useRegisterUserMutation();

  //================================================================

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset,
    getValues,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur",
  });
  const dispatch = useDispatch();
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const watchAllFields = watch();

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const authContent = {
    title: "Sign Up",
    topDescription: {
      text: "Already have an account?",
      link: "Sign in",
      linkUrl: authSignInPath,
    },
  };

  const onSubmit = async (data: IRegisterForm) => {
    if (data.password === data.confirmPassword) {
	  console.log(data);
      const user = await registerUser({
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
      }).unwrap();
      dispatch(putUser(user));
      console.log("Registration fields : ", user);
    } else {
      setIsPasswordValid(true);
    }
    reset();
  };

  return (
    <AuthContainer>
      <ContainerStyled>
        <AuthContent {...authContent}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("firstName", {
                required: true,
                pattern: nameRegex,
              })}
              name="firstName"
              fullWidth
              label="Name"
            />
            {errors?.firstName?.type === "required" && (
              <Typography>This field is required</Typography>
            )}
            {errors?.firstName?.type === "pattern" && (
              <Typography>Alphabetical characters only</Typography>
            )}
            <TextField
              {...register("lastName", {
                required: true,
                pattern: nameRegex,
              })}
              name="lastName"
              fullWidth
              label="Last Name"
            />
            {errors?.lastName?.type === "required" && (
              <Typography>This field is required</Typography>
            )}
            {errors?.lastName?.type === "pattern" && (
              <Typography>Alphabetical characters only</Typography>
            )}
            <TextField
              {...register("email", {
                required: true,
                pattern: emailRegex,
              })}
              name="email"
              fullWidth
              label="Email"
            />
            {errors?.email?.type === "pattern" && (
              <Typography>Please enter a valid email address</Typography>
            )}
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                {...register("password", {
                  required: true,
                  pattern: passwordRegex,
                })}
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
              />
            </FormControl>
            {errors?.password?.type === "pattern" && (
              <Typography>
                Password must contain A-z !@#$%^&*_=+- 0-9
              </Typography>
            )}
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">
                Confirm password
              </InputLabel>
              <OutlinedInput
                {...register("confirmPassword", { required: true })}
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
                label="Confirm password"
              />
              {isPasswordValid && (
                <Typography>Please enter your confirm pasword!</Typography>
              )}
            </FormControl>
            <Button disabled={!isValid} type="submit" variant="contained">
              Sign up
            </Button>
            <Terms variant="caption4">
              By signing in to your account you agree with our{" "}
              <Link>Privacy Policy</Link> and
              <Link>Terms of Use</Link>.
            </Terms>
          </Form>
        </AuthContent>
      </ContainerStyled>
    </AuthContainer>
  );
};

export default AuthSignUp;
