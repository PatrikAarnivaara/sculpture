import React from 'react';

const SculptureListItem = ({ image, date, description }) => {
	return (
		<div>
			<img src={image} alt={description} style={{ width: 'auto', maxHeight: 300 }} />
			<p>{date}</p>
			{description ? <span>{description}</span> : 'no description available'}
		</div>
	);
};

export default SculptureListItem;
