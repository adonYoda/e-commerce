import { Container, styled, Typography } from "@mui/material";
import React, { FC, useEffect } from "react";
import AuthContent from "../../components/Auth/AuthContent";

const AuthContainer = styled("div")``;

interface Props {}

const AuthSignUp: FC<Props> = () => {
	return (
		<AuthContainer>
			<Container>{/* <AuthContent title='Sign In'>children</AuthContent> */}</Container>
		</AuthContainer>
	);
};

export default AuthSignUp;
