import React from 'react';
import SculptureListItem from './SculptureListItem';

const SculptureList = ({ sculptureListArtsy }) => {
	return (
		<div className="container">
			{sculptureListArtsy ? (
				sculptureListArtsy.map((sculpture) => (
					<SculptureListItem
						key={sculpture.id}
						id={sculpture.id}
						url={sculpture.urls.small}
						date={sculpture.created_at}
						description={sculpture.alt_description}
					/>
				))
			) : (
				<div>Waiting to fetch images.{/* Spinner here */}</div>
			)}
		</div>
	);
};

export default SculptureList;
