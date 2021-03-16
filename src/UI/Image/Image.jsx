import React, { useRef } from 'react';
import Modal from '../Modal/Modal';
import noImageIcon from '../../assets/no_image_available.svg';
import './Image.css';

const Image = ({ image, alt }) => {
	const modal = useRef(null);

	function handleModal() {
		if (image === null) {
			return;
		}
		modal.current.open();
	}

	return (
		<div>
			<img
				src={image !== null ? `https://www.artic.edu/iiif/2/${image}/full/843,/0/default.jpg` : noImageIcon}
				className="image-card"
				alt={alt}
				onClick={handleModal}
			/>
			<Modal ref={modal} defaultOpened={false}>
				{
					<img
						src={`https://www.artic.edu/iiif/2/${image}/full/843,/0/default.jpg`}
						className="image-card"
						alt={alt}
					/>
				}
			</Modal>
		</div>
	);
};

export default Image;
