import React from 'react';
import SculptureListItem from './SculptureListItem';

const SculptureList = ({ items }) => {
	return (
		<div className="cards">
			{items.length > 0 ? items.map((item) => <SculptureListItem key={item.id} item={item} />) : []}
		</div>
	);
};

export default SculptureList;
