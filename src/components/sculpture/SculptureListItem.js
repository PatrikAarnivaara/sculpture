import React, { useState } from 'react';
import './Sculpture.css';
// ADD proptypes

const SculptureListItem = ({ url, description, setSelectedSculptures, selectedSculptures }) => {
	const [clickHandler, setClickHandler] = useState(false);

	const handleClick = () => {
		if (!clickHandler) {
			setClickHandler(true);
			setSelectedSculptures([...selectedSculptures, { url: url, description: description }]);
			if (selectedSculptures) console.log(selectedSculptures);
		} else {
			setClickHandler(false);
		}
	};

	return (
		<div onClick={handleClick} className={clickHandler ? 'selected' : 'unselected'}>
			<img src={url} alt={description} />
		</div>
	);
};

export default SculptureListItem;
