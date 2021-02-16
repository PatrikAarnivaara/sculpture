import React from 'react';

const CollectionListItem = ({ url, description }) => {
	return (
		<div>
			<img src={url} alt={description} style={{ width: 'auto', height: '300px' }} />
		</div>
	);
};

export default CollectionListItem;
