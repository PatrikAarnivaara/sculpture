import React, { useContext, useState } from 'react';
import { SculptureContext } from '../../context/SculptureContext';
import './Sculpture.css';
// ADD proptypes

const SculptureListItem = ({ id, url, description }) => {
	const { addSculpture, removeSculpture } = useContext(SculptureContext);
	const [clickHandler, setClickHandler] = useState(false);

	const handleClick = () => {
		if (!clickHandler) {
			setClickHandler(true);
			addSculpture(id, url, description);
		} else {
			setClickHandler(false);
			removeSculpture(id);
		}
	};

	return (
		<div onClick={handleClick} className={clickHandler ? 'selected' : 'unselected'}>
			<img src={url} alt={description} />
		</div>
	);
};

export default SculptureListItem;
