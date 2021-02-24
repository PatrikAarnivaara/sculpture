import React, { useContext, useState } from 'react';
import { SculptureContext } from '../../context/SculptureContext';
import './Sculpture.css';
// ADD proptypes

const SculptureListItem = ({ id, url, date, description, category }) => {
	const { addSculpture, removeSculpture } = useContext(SculptureContext);
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		if (!clicked) {
			setClicked(true);
			addSculpture(id, url, description);
		} else {
			setClicked(false);
			removeSculpture(id);
		}
	};

	return (
		<div onClick={handleClick} className={clicked ? 'selected' : 'unselected'}>
			<img src={url} alt={description} />
			<p>{description}</p>
			<p>{date}</p>
			<p>{category}</p>
		</div>
	);
};

export default SculptureListItem;
