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
`;
const TopRow = styled("div")`
	display: flex;
	align-items: center;
	justify-content: space-between;
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
				<Typography variant='caption4'>
					{topDescription?.text}
					{!!topDescription?.linkUrl && <Link to={topDescription?.linkUrl}>{topDescription?.link}</Link>}
				</Typography>
			</TopRow>
			{children}
		</AuthContentContainer>
	);
};

export default AuthContent;
