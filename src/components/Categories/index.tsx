import { Container } from '@mui/material';
import React from 'react';
import { categories } from 'src/utils/constants/categories.constants';
import { CategoriesColumn, CategoriesContainer, CategoriesRow } from './Categories.styled';
import Category from './Category';

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
