import { styled } from "@mui/material";
import React, { FC, useState } from "react";
import { BgImage } from "src/components/globals/BgImage.styled";
import ModalImages from "src/components/ModalImages/ModalImages";
import { itemNotFound } from "src/utils/constants/temp.constans";

const ProductItemGalleryContainer = styled("div")`
	display: flex;
	flex: 1 1 auto;
	flex-wrap: wrap;
	height: 1273px;
	gap: 5px;
`;
const ImageCard = styled("div")`
	position: relative;
	flex: 0 1 calc(50% - 5px);
	cursor: pointer;
	z-index: 3;
`;

interface Props {
	photosUrl: Array<string>;
}

const ProductItemGallery: FC<Props> = ({ photosUrl }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [photoIndex, setPhotoIndex] = useState(0);

	const onImageError = (e: any) => {
		return (e.target.src = itemNotFound);
	};

	const handleClickImage = (index: number) => {
		setIsOpen(true);
		setPhotoIndex(index);
	};

	return (
		<ProductItemGalleryContainer>
			{photosUrl.map((p, i) => (
				<ImageCard key={p} onClick={() => handleClickImage(i)}>
					<BgImage onError={onImageError} src={p} />
				</ImageCard>
			))}
			{isOpen && (
				<ModalImages
					images={photosUrl}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					photoIndex={photoIndex}
					setPhotoIndex={setPhotoIndex}
				/>
			)}
		</ProductItemGalleryContainer>
	);
};

export default ProductItemGallery;
