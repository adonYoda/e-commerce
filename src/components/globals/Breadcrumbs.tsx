import { Breadcrumbs as Breadcrumb, styled, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useGetLocation from "src/hooks/useGetLocation";
import useGetParams from "src/hooks/useGetParams";
import { prefixPathProductCode } from "src/utils/constants/product.constants";
import { productsPath } from "src/utils/constants/routes.constants";

const BreadcrumbsContainer = styled("div")`
	padding: 30px 0;
`;
const Crumbs = styled(Typography)`
	color: ${({ theme }) => theme.palette.text.placeholder};
	font-weight: 500;
	cursor: pointer;
`;
const LastCrumb = styled(Typography)`
	color: ${({ theme }) => theme.palette.text.primary};
`;

const Breadcrumbs = () => {
	const navigate = useNavigate();
	const paramsList = useGetLocation();
	const paths = paramsList
		.slice(1)
		.filter((el) => !el.includes(prefixPathProductCode))
		.map((el) => {
			return el[0].toUpperCase() + el.slice(1);
		});

	const handleClickNav = (target: string) => {
		const index = paramsList.findIndex((p) => p.toLowerCase() === target.toLowerCase());
		const path = paramsList.slice(0, index + 1).join("/");
		navigate(path);
	};
	return (
		<BreadcrumbsContainer role='presentation'>
			<Breadcrumb aria-label='breadcrumb'>
				{paths.map(
					(p, i) =>
						i < paths.length - 1 && (
							<Crumbs variant='caption2' key={p} onClick={() => handleClickNav(p)}>
								{p}
							</Crumbs>
						)
				)}
				<LastCrumb>{paths.at(-1)}</LastCrumb>
			</Breadcrumb>
		</BreadcrumbsContainer>
	);
};

export default Breadcrumbs;
