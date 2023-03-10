import { Button, styled, TextField } from "@mui/material";
import React, { FC } from "react";
import { authSignInPath } from "src/utils/constants/routes.constants";
import AuthContent from "../../components/Auth/AuthContent";
import { AuthContainer, ContainerStyled } from "./Auth.styled";

const Form = styled("form")`
  display: flex;
  gap: 16px;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;


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
					<Form>
					<TextField fullWidth label='Email' />
					<Button variant='contained'>Send</Button>
					</Form>
				</AuthContent>
			</ContainerStyled>
		</AuthContainer>
	);
};

export default AuthRecovery;
