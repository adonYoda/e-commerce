import { Container, FormControl, styled, Typography } from "@mui/material";
import React, { FC, useEffect } from "react";
import { authSignUpPath } from "src/utils/constants/routes.constants";
import AuthContent from "../../components/Auth/AuthContent";

const AuthContainer = styled("div")`
	display: flex;
	flex: 1 1 auto;
`;
const ContainerStyled = styled(Container)`
	min-height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

interface Props {}

const AuthSignIn: FC<Props> = () => {
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
				<AuthContent {...authContent}>children</AuthContent>
			</ContainerStyled>
		</AuthContainer>
	);
};

export default AuthSignIn;
