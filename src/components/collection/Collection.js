import React from 'react';
import CollectionList from './CollectionList';
import './Collection.css';

const Collection = () => {
	return (
		<div className="collection-wrapper">
			<h3>Collection</h3>
			<CollectionList />
		</div>
	);
};

export default Collection;
