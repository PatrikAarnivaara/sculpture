import React from 'react';
import SculptureListItem from './SculptureListItem';

const SculptureList = ({ sculptureList }) => {
	return (
		<div className="container">
			{sculptureList
				? sculptureList.map((sculpture, index) => (
						<SculptureListItem
							key={index}
							id={sculpture.id}
							url={sculpture.urls.small}
							date={sculpture.created_at}
							description={sculpture.alt_description}
						/>
				  ))
				: []}
		</div>
	);
};

export default SculptureList;
