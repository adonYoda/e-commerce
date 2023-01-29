import { styled } from '@mui/material';
import React, { FC, ReactNode } from 'react';
import Footer from 'src/components/Footer/Footer';
import Header from '../Header';

const LayoutContainer = styled('div')`
	position: relative;
`;

interface Props {
	children: ReactNode;
	dark?: boolean;
}

const Layout: FC<Props> = ({ children, dark }) => {
	return (
		<LayoutContainer>
			<Header dark={dark} />
			{children}
			<Footer />
		</LayoutContainer>
	);
};

export default Layout;
