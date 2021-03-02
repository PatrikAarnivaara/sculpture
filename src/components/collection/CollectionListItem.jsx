import React from 'react';

const CollectionListItem = ({ url, description }) => {
	return (
		<div className="collection-item">
			<img src={url} alt={description} />
			<p>{description}</p>
		</div>
	);
};

export default CollectionListItem;
