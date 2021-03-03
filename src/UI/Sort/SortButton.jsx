import React from 'react';
import './SortButton.css';

const SortButton = ({ image, description }) => {
	return (
		<button className="sort-btn">
			<img src={image} alt={description} />
		</button>
	);
};

export default SortButton;
