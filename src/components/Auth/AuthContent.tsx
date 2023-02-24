import { styled, Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

const AuthContentContainer = styled("div")`
	width: 410px;
	padding: 24px 30px;
	border: 1px solid ${({ theme }) => theme.palette.grey["A100"]};
	border-radius: ${({ theme }) => theme.shape.borderRadius}px;
	box-shadow: 0px 30px 100px rgba(0, 0, 0, 0.08);
	margin: auto;
	translate: 0 -30px;
`;
const TopRow = styled("div")`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 23px;
	font-weight: 500;
`;
const LinkStyled = styled(Link)`
	color: ${({ theme }) => theme.palette.primary.main};
	margin-left: 4px;
`;
const TypographyDescription = styled(Typography)`
	color: ${({ theme }) => theme.palette.text.placeholder};
`;
const Childrens = styled("div")`
	/* display: flex;
	flex-direction: column;
	//gap: 16px;
	width: 100%;
	height: 100%; */
`;

interface Props {
	children: ReactNode;
	title: string;
	topDescription: {
		text?: string;
		link: string;
		linkUrl: string;
	};
}

const AuthContent: FC<Props> = ({ children, title, topDescription }) => {
	return (
		<AuthContentContainer>
			<TopRow>
				<Typography variant='h5'>{title}</Typography>
				<TypographyDescription variant='caption4'>
					{topDescription?.text}
					{!!topDescription?.linkUrl && (
						<LinkStyled to={topDescription?.linkUrl}>{topDescription?.link}</LinkStyled>
					)}
				</TypographyDescription>
			</TopRow>
			<Childrens>{children}</Childrens>
		</AuthContentContainer>
	);
};

export default AuthContent;
