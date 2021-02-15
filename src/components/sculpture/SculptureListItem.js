import React, { useState } from 'react';
import './Sculpture.css';
// ADD proptypes

/* const LOCAL_STORAGE_KEY = 'sculptures'; */

/* const saveToLocalStorage = (articles) => {
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(sculptures));
};

const readFromLocalStorage = () => {
	const storedArticles = localStorage.getItem(LOCAL_STORAGE_KEY);
	return storedArticles ? JSON.parse(storedArticles) : [];
}; */

const SculptureListItem = ({ image, description }) => {
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
		</div>
	);
};

export default SculptureListItem;
