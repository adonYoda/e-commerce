import React, { FC } from 'react';
import SvgIcon from '../globals/SvgIcon';
import { ReactComponent as RightArrowIcon } from '../../assets/icons/Navigation/arrow-right.svg';
import { BgImageStyled, CategoryButton, CategoryContainer, CategoryContent, Title } from './Category.styled';
import { Link } from 'react-router-dom';
import { productsPath } from 'src/utils/constants/routes.constants';

interface Props {
	large: boolean;
	imageSrc: string;
	imageAlt?: string;
	title: string;
}

const Category: FC<Props> = ({ large, imageSrc, imageAlt, title }) => {
	return (
		<CategoryContainer large={large ? 'large' : undefined}>
			<BgImageStyled src={imageSrc} alt={imageAlt} />
			<CategoryContent large={large ? 'large' : undefined}>
				<Title className='category' large={large ? 'large' : undefined} variant={large ? 'h2' : 'h5'}>
					{title}
				</Title>
				<CategoryButton variant='body15'>
					<Link to={productsPath + '/' + title}>
						Explore <SvgIcon icon={<RightArrowIcon />} />
					</Link>
				</CategoryButton>
			</CategoryContent>
		</CategoryContainer>
	);
};

export default Category;
