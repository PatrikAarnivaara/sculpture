import React, { useState } from 'react';
import CollectionListItem from './CollectionListItem';
/* 
    const readFromLocalStorage = () => {
    const storedSculptures = localStorage.getItem("collection");
    return storedSculptures ? JSON.parse(storedSculptures) : [];
    };
    } */

const CollectionList = () => {
	const [sculptures] = useState([
		{
			url:
				'https://images.unsplash.com/photo-1548811579-017cf2a4268b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMzQzODN8MHwxfHNlYXJjaHwxfHxzY3VscHR1cmV8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=400',
			description: 'concrete man statue',
		},
		/* readFromLocalStorage() */
	]);

    console.log(sculptures)

	return (
		<div>
			{sculptures.map((sculpture, index) => (
				<CollectionListItem key={index} url={sculpture.url} description={sculpture.description} />
			))}
		</div>
	);
};

export default CollectionList;
