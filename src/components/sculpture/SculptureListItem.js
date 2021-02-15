import React, { useState } from 'react';
import './Sculpture.css';
// ADD proptypes

const SculptureListItem = ({ image, date, description }) => {
	/* const formatDate = new Date(date); */
	const [clickHandler, setClickHandler] = useState(false);

	const handleClick = () => {
		if (!clickHandler) {
			setClickHandler(true);
		} else {
			setClickHandler(false);
		}
	};

	return (
		<div onClick={handleClick} className={clickHandler ? 'selected' : 'unselected'}>
			<img src={image} alt={description} />
			{/* <p>Year: {formatDate.getFullYear()}</p>
			{description ? <span>Description: {description}</span> : 'no description available'} */}
		</div>
	);
};

export default SculptureListItem;
