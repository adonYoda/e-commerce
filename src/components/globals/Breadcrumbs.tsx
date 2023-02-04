import { Breadcrumbs as Breadcrumb, styled, Typography } from '@mui/material';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useGetLocation from 'src/hooks/useGetLocation';
import useGetParams from 'src/hooks/useGetParams';
import { productsPath } from 'src/utils/constants/routes.constants';

const TypographyStyled = styled(Typography)``;
TypographyStyled.defaultProps = { variant: 'caption2' };
const Crumbs = styled(Typography)`
	color: ${({ theme }) => theme.palette.text.placeholder};
	cursor: pointer;
`;
const LastCrumb = styled(Typography)`
	color: ${({ theme }) => theme.palette.text.primary};
`;

const Breadcrumbs = () => {
	const navigate = useNavigate();
	const paramsList = useGetLocation();
	const paths = paramsList.slice(1);

	const handleClickNav = (target: string) => {
		const index = paramsList.findIndex((p) => p === target);
		const path = paramsList.slice(0, index + 1).join('/');
		navigate(path);
	};
	return (
		<div role='presentation'>
			<Breadcrumb aria-label='breadcrumb'>
				{paths.map(
					(p, i) =>
						i < paths.length - 1 && (
							<Crumbs key={p} onClick={() => handleClickNav(p)}>
								{p}
							</Crumbs>
						)
				)}
				<LastCrumb>{paths.at(-1)}</LastCrumb>
			</Breadcrumb>
		</div>
	);
};

export default Breadcrumbs;
