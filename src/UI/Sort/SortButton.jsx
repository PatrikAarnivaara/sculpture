import React from 'react';
import './SortButton.css';

const SortButton = ({ image, description, handleClick }) => {
	return (
		<button className="sort-btn">
			<img src={image} alt={description} onClick={handleClick}/>
		</button>
	);
};

export default SortButton;
