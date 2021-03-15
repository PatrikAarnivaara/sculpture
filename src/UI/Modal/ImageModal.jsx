import React, { useRef } from 'react';
import Modalus from './Modalus';
import './Modal.css';

const ImageModal = ({ image, alt }) => {
	const modal = useRef(null);
	console.log(image, alt);

	return (
		<div>
			<img
				src={`https://www.artic.edu/iiif/2/${image}/full/843,/0/default.jpg`}
				className="image-card"
				alt={alt}
				onClick={() => modal.current.open()}
			/>
			<Modalus ref={modal}>
				{
					<img
						src={`https://www.artic.edu/iiif/2/${image}/full/843,/0/default.jpg`}
						className="image-card"
						alt={alt}
					/>
				}
			</Modalus>
		</div>
	);
};

export default ImageModal;
