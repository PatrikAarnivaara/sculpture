import React, { useContext, useState } from 'react';
import { SculptureContext } from '../../context/SculptureContext';
import './Sculpture.css';
// ADD proptypes

const SculptureListItem = ({ id, url, description }) => {
	const { addSculpture, removeSculpture } = useContext(SculptureContext);
	const [clickHandler, setClickHandler] = useState(true);

	const handleClick = () => {
		console.log(clickHandler)
		
		if (clickHandler) {
			setClickHandler(false);
			addSculpture(id, url, description);
		} else {
			setClickHandler(true);
			removeSculpture(id);
		}
	};

	return (
		<div onClick={handleClick} className={clickHandler ? 'unselected' : 'selected'}>
			<img src={url} alt={description} />
		</div>
	);
};

export default SculptureListItem;
