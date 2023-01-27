import { styled } from '@mui/material';
import React, { FC, ReactNode } from 'react';
import Footer from 'src/scenes/Footer/Footer';
import AppBar from '../AppBar';

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
			<AppBar dark={dark} />
			{children}
			<Footer />
		</LayoutContainer>
	);
};

export default Layout;
