import React from 'react';
import SculptureListItem from './SculptureListItem';

const SculptureList = ({ items, iconUnClicked, iconClicked, image, date }) => {
	return (
		<div className="cards">
			{items.length > 0
				? items.map((item) => (
						<SculptureListItem
							key={item.id}
							item={item}
							iconUnClicked={iconUnClicked}
							iconClicked={iconClicked}
							image={image}
							date={date}
						/>
				  ))
				: []}
		</div>
	);
};

export default SculptureList;
