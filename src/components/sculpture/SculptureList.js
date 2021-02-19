import React, { useContext } from 'react';
import SculptureListItem from './SculptureListItem';
import { SculptureContext } from '../../context/SculptureContext';

const SculptureList = () => {
	const { sculptureListArtsy } = useContext(SculptureContext);
	console.log(sculptureListArtsy)
	return (
		<div className="container">
			{sculptureListArtsy.length
				? sculptureListArtsy.map((sculpture) => (
						<SculptureListItem
							key={sculpture.id}
							id={sculpture.id}
							url={`https://www.artic.edu/iiif/2/${sculpture.image_id}/full/843,/0/default.jpg`}
							date={sculpture.date_start}
							description={sculpture.title}
							category={sculpture.category_titles[0]}
						/>
				  ))
				: []}
		</div>
	);
};

/* <div className="loader"></div> */

export default SculptureList;
