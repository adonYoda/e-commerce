import { Container, styled } from '@mui/material';
import React from 'react';
import PostCard from './PostCard';

const LastPostsBlogContainer = styled('div')``;
const ContainerStyled = styled(Container)`
	display: flex;
	gap: 30px;
`;

const blogPosts = [
	{
		srcImage: 'https://i.imgur.com/Yv8MhU0.jpg',
		title: 'Reach Your Fitness Goals with the our Training Club App (NTC).',
		dateCreation: '2020-08-07',
	},
	{
		srcImage: 'https://i.imgur.com/V0eoXHY.jpg',
		title: 'Workout From Home Routines: Tips and Best Practices',
		dateCreation: '2020-08-07',
	},
	{
		srcImage: 'https://i.imgur.com/Yv8MhU0.jpg',
		title: 'Train The Way You Want: Energise Your Routine with our Growing Library of Workout',
		dateCreation: '2020-08-07',
	},
];

const LastPostsBlog = () => {
	return (
		<LastPostsBlogContainer>
			<ContainerStyled>
				{blogPosts.map((p, i) => (
					<PostCard key={p.title} {...p} />
				))}
			</ContainerStyled>
		</LastPostsBlogContainer>
	);
};

export default LastPostsBlog;
