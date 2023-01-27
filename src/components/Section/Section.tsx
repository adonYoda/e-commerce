import { Container, styled, Typography } from '@mui/material';
import React, { FC, ReactNode } from 'react';

const SectionContainer = styled('section')`
	width: 100%;
	padding: 50px 0 48px;
`;
const TypographyStyled = styled(Typography)`
	margin-bottom: 48px;
`;

interface Props {
	children: ReactNode;
	title: string;
}

const Section: FC<Props> = ({ children, title }) => {
	return (
		<SectionContainer>
			<Container>
				<TypographyStyled variant='h4'>{title}</TypographyStyled>
			</Container>
			{children}
		</SectionContainer>
	);
};

export default Section;
