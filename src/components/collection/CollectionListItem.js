import React from 'react';

const CollectionListItem = ({ url, description }) => {
	return (
		<div>
			<img src={url} alt={description} />
		</div>
	);
};

export default CollectionListItem;
