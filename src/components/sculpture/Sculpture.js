import React, { useEffect, useState } from 'react';
import getGoogle from '../../api/getGoogle';
import SculptureListItem from './SculptureListItem';
import './Sculpture.css';

/* const LOCAL_STORAGE_KEY = 'images'; */

/* const saveToLocalStorage = (articles) => {
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(articles));
};

const readFromLocalStorage = () => {
	const storedArticles = localStorage.getItem(LOCAL_STORAGE_KEY);
	return storedArticles ? JSON.parse(storedArticles) : [];
}; */

const Sculpture = () => {
	const [sculptureList, setSculptureList] = useState([]);

	useEffect(() => {
		const getTestData = async () => {
			try {
				const response = await getGoogle();
				setSculptureList(response);
				/* localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(response)); */
			} catch (error) {
				console.log(error);
			}
		};
		getTestData();
	}, []);

	return (
		/* Spinner and timer */
		<div className="container">
			{sculptureList
				? sculptureList.map((sculpture, index) => (
						<SculptureListItem
							key={index}
							image={sculpture.urls.small}
							date={sculpture.created_at}
							description={sculpture.alt_description}
						/>
				  ))
				: []}
		</div>
	);
};

export default Sculpture;
