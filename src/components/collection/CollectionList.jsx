import React, { useContext } from 'react';
import { SculptureContext } from '../../context/SculptureContext';
import CollectionListItem from './CollectionListItem';
import bookmarkIcon from '../../assets/unbookmarked.svg';

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
				<h3>
					Search and click
					<img src={bookmarkIcon} alt="bookmark icon" style={{ width: '50px', height: 'auto' }} />
					to add image here.
				</h3>
			)}
		</div>
	);
};

export default CollectionList;
