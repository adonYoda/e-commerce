import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';

interface Props {
	categoryParam: string;
	subcategoryParam: string;
}
const Products: FC<Props> = ({ categoryParam, subcategoryParam }) => {
	return (
		<div>
			{categoryParam} {'>>'} {subcategoryParam}
		</div>
	);
};

export default Products;
