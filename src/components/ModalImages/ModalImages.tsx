import { styled } from "@mui/material";
import React, { FC, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const ModalImagesContainer = styled("div")``;

interface Props {
	images: Array<string>;
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
	photoIndex: number;
	setPhotoIndex: (index: number) => void;
}

const ModalImages: FC<Props> = ({ images, isOpen, setIsOpen, photoIndex, setPhotoIndex }) => {
	return (
		<ModalImagesContainer>
			{/* <button type='button' onClick={() => setIsOpen(true)}>
				Open Lightbox
			</button> */}

			<Lightbox
				mainSrc={images[photoIndex]}
				nextSrc={images[(photoIndex + 1) % images.length]}
				prevSrc={images[(photoIndex + images.length - 1) % images.length]}
				onCloseRequest={() => setIsOpen(false)}
				onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
				onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
			/>
		</ModalImagesContainer>
	);
};

export default ModalImages;
