import { Container, styled, Typography } from "@mui/material";

export const AuthContainer = styled("div")`
	display: flex;
	flex: 1 1 auto;
`;
export const ContainerStyled = styled(Container)`
	min-height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const LostPassword = styled(Typography)`
	margin-top: 4px;
	color: ${({ theme }) => theme.palette.primary.main};
	font-weight: 500;
	text-align: center;
	cursor: pointer;
`;
export const Terms = styled(Typography)`
	padding: 0 10px;
	margin-top: 4px;
	color: ${({ theme }) => theme.palette.text.secondary};
	font-weight: 400;
	text-align: center;
`;
export const Link = styled("span")`
	margin-top: 4px;
	color: ${({ theme }) => theme.palette.text.primary};
	font-weight: 500;
	cursor: pointer;
`;
