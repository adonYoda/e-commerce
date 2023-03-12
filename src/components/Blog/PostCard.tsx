import { styled, Typography } from '@mui/material';
import moment from 'moment';
import React, { FC } from 'react';
import { BgImage } from '../globals/BgImage.styled';
import SvgIcon from '../globals/SvgIcon';
import { ReactComponent as ClockIcon } from '../../assets/icons/Base/clock.svg';
import theme from 'src/utils/theme/theme';

const PostImage = styled('div')`
	position: relative;
	flex: 0 0 50%;
	height: 50%;
	transition: all 0.3s ease 0s;
`;
const PostContent = styled('div')`
	padding: 0 20px 20px 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex: 1 1 100%;
	transition: all 0.3s ease 0s;
`;
const PostTitleWrapper = styled('div')`
	margin: 64px 0 24px;
	overflow: hidden;
	height: 100%;
`;
const PostTitle = styled(Typography)`
	/* transition: all 0.3s ease 0s; */
`;
const PostDateWrapper = styled('div')`
	display: flex;
	align-items: center;
	gap: 9.6px;
`;
const PostDate = styled(Typography)`
	color: ${({ theme }) => theme.palette.text.secondary};
`;
const SvgIconStyled = styled(SvgIcon)``;
SvgIconStyled.defaultProps = {
	size: 16.67,
	color: theme.palette.text.placeholder,
};
const PostCardContainer = styled('div')`
	border-radius: ${({ theme }) => theme.shape.borderRadius}px;
	border: 1px solid ${({ theme }) => theme.palette.grey['A200']};
	display: flex;
	flex-direction: column;
	overflow: hidden;
	flex: 0 1 33.333%;
	height: 540px;
	cursor: pointer;
	&:hover {
		${PostTitle} {
			font-size: ${({ theme }) => theme.typography.h3.fontSize};
			font-weight: ${({ theme }) => theme.typography.h3.fontWeight};
			line-height: ${({ theme }) => theme.typography.h3.lineHeight};
			letter-spacing: ${({ theme }) => theme.typography.h3.letterSpacing};
		}
		${PostImage} {
			position: relative;
			flex: 0 0 0%;
			height: 0%;
			opacity: 0;
		}
		${PostContent} {
			background-color: ${({ theme }) => theme.palette.primary.contrastText};
		}
	}
`;

interface Props {
	srcImage: string;
	title: string;
	dateCreation: string;
}

const PostCard: FC<Props> = ({ srcImage, title, dateCreation }) => {
	let date = moment(dateCreation, 'YYYY-MM-DD').format('DD.MM.YYYY');

	return (
		<PostCardContainer>
			<PostImage>
				<BgImage src={srcImage} alt={title} />
			</PostImage>
			<PostContent>
				<PostTitleWrapper>
					<PostTitle className='post-preview__title' variant='h5'>
						{title}
					</PostTitle>
				</PostTitleWrapper>
				<PostDateWrapper>
					<SvgIconStyled icon={<ClockIcon />} />
					<PostDate variant='caption2'>{date}</PostDate>
				</PostDateWrapper>
			</PostContent>
		</PostCardContainer>
	);
};

export default PostCard;
