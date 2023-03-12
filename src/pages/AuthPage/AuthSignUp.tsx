import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import React, { FC } from "react";
import { authSignInPath } from "src/utils/constants/routes.constants";
import AuthContent from "../../components/Auth/AuthContent";
import { AuthContainer, ContainerStyled, Link, Terms } from "./Auth.styled";
import { ReactComponent as Visibility } from "../../assets/icons/Base/eye.svg";
import { ReactComponent as VisibilityOff } from "../../assets/icons/Base/eye-slash.svg";

interface Props {}

const AuthSignUp: FC<Props> = () => {
	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
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
	return (
		<AuthContainer>
			<ContainerStyled>
				<AuthContent {...authContent}>
					<TextField fullWidth label='Name' />
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
					<FormControl fullWidth>
						<InputLabel htmlFor='outlined-adornment-password'>Confirm password</InputLabel>
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
							label='Confirm password'
						/>
					</FormControl>
					<Button variant='contained'>Sign up</Button>
					<Terms variant='caption4'>
						By signing in to your account you agree with our <Link>Privacy Policy</Link> and
						<Link>Terms of Use</Link>.
					</Terms>
				</AuthContent>
			</ContainerStyled>
		</AuthContainer>
	);
};

export default AuthSignUp;
