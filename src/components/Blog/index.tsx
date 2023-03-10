import { Container, styled } from "@mui/material";
import React from "react";
import { blogPosts } from "src/utils/constants/blog.constants";
import PostCard from "./PostCard";

const LastPostsBlogContainer = styled("div")``;
const ContainerStyled = styled(Container)`
	display: flex;
	gap: 30px;
`;

const LastPostsBlog = () => {
	return (
		<LastPostsBlogContainer>
			<ContainerStyled>
				{blogPosts.map((p, i) => (
					<PostCard key={i} {...p} />
				))}
			</ContainerStyled>
		</LastPostsBlogContainer>
	);
};

export default LastPostsBlog;
