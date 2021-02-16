import React from 'react';
import './Collection.css';
import CollectionList from './CollectionList';

/* localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(response)); */
//List needs to be fetched here: selectedSculptures
const Collection = () => {
	return (
		<div className="collection-wrapper">
			<h3>Collection</h3>
			<CollectionList />
			{/* List should be sent in here as a prop 
            selectedSculptures={selectedSculptures} */}
		</div>
	);
};

export default Collection;
