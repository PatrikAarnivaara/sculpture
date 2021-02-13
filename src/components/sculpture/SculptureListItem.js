import React from 'react';
// ADD proptypes

const SculptureListItem = ({ image, date, description }) => {
	const formatDate = new Date(date);

	return (
		<div>
			<img src={image} alt={description} className="imago" />
			<p>Year: {formatDate.getFullYear()}</p>
			{description ? <span>Description: {description}</span> : 'no description available'}
		</div>
	);
};

export default SculptureListItem;
