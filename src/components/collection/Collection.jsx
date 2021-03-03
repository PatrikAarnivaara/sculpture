import React from 'react';
import CollectionList from './CollectionList';
/* import CheckboxLogic from '../../UI/Checkboxes/CheckboxLogic'; */
import './Collection.css';

const Collection = () => {
	return (
		<div>
			{/* <div className="collection-header">
				<h2>collection</h2>
			</div> */}
			{/* <CheckboxLogic /> */}
			<CollectionList />
		</div>
	);
};

export default Collection;
