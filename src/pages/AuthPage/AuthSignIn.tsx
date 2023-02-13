import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import React, { FC } from "react";
import { authSignUpPath } from "src/utils/constants/routes.constants";
import AuthContent from "../../components/Auth/AuthContent";
import { ReactComponent as Visibility } from "../../assets/icons/Base/eye.svg";
import { ReactComponent as VisibilityOff } from "../../assets/icons/Base/eye-slash.svg";
import { AuthContainer, ContainerStyled, LostPassword } from "./Auth.styled";

interface Props {}

const AuthSignIn: FC<Props> = () => {
	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	const authContent = {
		title: "Sign In",
		topDescription: {
			text: "Don't have an account?",
			link: "Sign up",
			linkUrl: authSignUpPath,
		},
	};

	return (
		<AuthContainer>
			<ContainerStyled>
				<AuthContent {...authContent}>
					<TextField fullWidth label='Email' />
					<FormControl fullWidth>
						<InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
						<OutlinedInput
							id='outlined-adornment-password'
							type={showPassword ? "text" : "password"}
							endAdornment={
								<InputAdornment position='end'>
									<IconButton
										aria-label='toggle password visibility'
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										edge='end'
									>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
							label='Password'
						/>
					</FormControl>
					<Button variant='contained'>Login</Button>
					<LostPassword variant='caption4'>Lost your password?</LostPassword>
				</AuthContent>
			</ContainerStyled>
		</AuthContainer>
	);
};

export default AuthSignIn;
