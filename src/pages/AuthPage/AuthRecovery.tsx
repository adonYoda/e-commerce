import { Button, TextField } from "@mui/material";
import React, { FC } from "react";
import { authSignInPath } from "src/utils/constants/routes.constants";
import AuthContent from "../../components/Auth/AuthContent";
import { AuthContainer, ContainerStyled } from "./Auth.styled";

interface Props {}

const AuthRecovery: FC<Props> = () => {
	const authContent = {
		title: "Restore password",
		topDescription: {
			link: "Sign in",
			linkUrl: authSignInPath,
		},
	};
	return (
		<AuthContainer>
			<ContainerStyled>
				<AuthContent {...authContent}>
					<TextField fullWidth label='Email' />
					<Button variant='contained'>Send</Button>
				</AuthContent>
			</ContainerStyled>
		</AuthContainer>
	);
};

export default AuthRecovery;
