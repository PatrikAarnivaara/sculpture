import React from 'react';
import CollectionList from './CollectionList';
import './Collection.css';

const Collection = () => {
	return (
		<div>
			<div className="collection-header">
				<h1>collection</h1>
			</div>
			<CollectionList />
		</div>
	);
};

export default Collection;
