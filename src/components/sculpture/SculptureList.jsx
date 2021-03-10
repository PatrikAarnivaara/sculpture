import React from 'react';
import SculptureListItem from './SculptureListItem';

const SculptureList = ({ items }) => {
	console.log(items);
	return (
		<div className="cards">
			{items.length > 0
				? items.map((item) => (
						<SculptureListItem
							key={item.id}
							id={item.id}
							url={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
							date={item.date_start}
							title={item.title}
						/>
				  ))
				: []}
		</div>
	);
};

/* <div className="loader"></div> */

export default SculptureList;
