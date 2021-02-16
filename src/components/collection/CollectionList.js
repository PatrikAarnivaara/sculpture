import React, { useContext } from 'react';
import { SculptureContext } from '../../context/SculptureContext';
import CollectionListItem from './CollectionListItem';

const CollectionList = () => {
	const { sculptures } = useContext(SculptureContext);

	return (
		<div className="collection-wrapper">
			{sculptures.length ? (
				sculptures.map((sculpture) => (
					<CollectionListItem
						key={sculpture.id}
						id={sculpture.id}
						url={sculpture.url}
						description={sculpture.description}
					/>
				))
			) : (
				<div>No images in your collection.</div>
			)}
		</div>
	);
};

export default CollectionList;
