import { Container } from '@mui/material';
import React from 'react';
import { CategoriesColumn, CategoriesContainer, CategoriesRow } from './Categories.styled';
import Category from './Category';

const categories = [
	{
		title: 'Men',
		imageSrc: 'https://i.imgur.com/nVUYrph.jpeg',
		imageAlt: 'Men Category',
		large: true,
	},
	{
		title: 'Women',
		imageSrc: 'https://i.imgur.com/QmLgQTr.jpeg',
		imageAlt: 'Women Category',
		large: false,
	},
	{
		title: 'Kids',
		imageSrc: 'https://i.imgur.com/88bPXsj.jpeg',
		imageAlt: 'Kids Category',
		large: false,
	},
	{
		title: 'Sale',
		imageSrc: 'https://i.imgur.com/qW61NlC.jpeg',
		imageAlt: 'Sale Category',
		large: false,
	},
	{
		title: 'Collections',
		imageSrc: 'https://i.imgur.com/JD7j3Nn.jpeg',
		imageAlt: 'Collections Category',
		large: false,
	},
];

const Categories = () => {
	return (
		<CategoriesContainer>
			<Container>
				<CategoriesRow>
					<Category {...categories[0]} />
					<CategoriesColumn>
						{categories.map(
							(c, i) =>
								!c.large && (
									<Category
										key={c.title}
										imageSrc={c.imageSrc}
										imageAlt={c.imageAlt}
										title={c.title}
										large={c.large}
									/>
								)
						)}
					</CategoriesColumn>
				</CategoriesRow>
			</Container>
		</CategoriesContainer>
	);
};

export default Categories;
