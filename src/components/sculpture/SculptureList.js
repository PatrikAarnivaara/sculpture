import React from 'react';
import SculptureListItem from './SculptureListItem';

const SculptureList = (props) => {
	return (
		<div className="container">
			{props.sculptureList
				? props.sculptureList.map((sculpture, index) => (
						<SculptureListItem
							key={index}
							id={sculpture.id}
							url={sculpture.urls.small}
							date={sculpture.created_at}
							description={sculpture.alt_description}
							selectedSculptures={props.selectedSculptures}
							setSelectedSculptures={props.setSelectedSculptures}
						/>
				  ))
				: []}
		</div>
	);
};

export default SculptureList;
