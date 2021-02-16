import React, { useContext } from 'react';
import { SculptureContext } from '../../context/SculptureContext';
import CollectionListItem from './CollectionListItem';

/* localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(response)); */
//List needs to be fetched here: selectedSculptures

/* 
    const readFromLocalStorage = () => {
    const storedSculptures = localStorage.getItem("collection");
    return storedSculptures ? JSON.parse(storedSculptures) : [];
    };
    } */

const CollectionList = () => {
	const { sculptures } = useContext(SculptureContext);

	return (
		<div className="collection-wrapper">
			{sculptures.map((sculpture, index) => (
				<CollectionListItem
					key={index}
					id={sculpture.id}
					url={sculpture.url}
					description={sculpture.description}
				/>
			))}
		</div>
	);
};

export default CollectionList;
