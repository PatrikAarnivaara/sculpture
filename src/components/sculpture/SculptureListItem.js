import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Sculpture.css';
// ADD proptypes



const SculptureListItem = ({ url, description, setSelectedSculptures, selectedSculptures }) => {
	const [clickHandler, setClickHandler] = useState(false);

	console.log(selectedSculptures)

	const handleClick = () => {
		if (!clickHandler) {
			setClickHandler(true);
			setSelectedSculptures([...selectedSculptures, { url, description, id: uuidv4() }]);
		} else {
			setClickHandler(false);
			setSelectedSculptures(selectedSculptures.filter(sculpture => sculpture.id !== selectedSculptures.id))
		}
	};

	return (
		<div onClick={handleClick} className={clickHandler ? 'selected' : 'unselected'}>
			<img src={url} alt={description} />
		</div>
	);
};

export default SculptureListItem;
