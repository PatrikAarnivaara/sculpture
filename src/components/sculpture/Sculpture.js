import React, { useEffect, useState } from 'react';
import getGoogle from '../../api/getGoogle';
import unsplash from '../../api/unsplash';
import './Sculpture.css';

const LOCAL_STORAGE_KEY = 'articles';

const saveToLocalStorage = (articles) => {
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(articles));
};

const readFromLocalStorage = () => {
	const storedArticles = localStorage.getItem(LOCAL_STORAGE_KEY);
	return storedArticles ? JSON.parse(storedArticles) : [];
};

/* useMemo???? */
const Sculpture = () => {
	const [sculptureList, setSculptureList] = useState(readFromLocalStorage());

	useEffect(() => {
		const getTestData = async () => {
			try {
				/* const response = await unsplash.get("/search/photos", {
					params: { query: 'sculpture' }
				  }) */
				const response = await getGoogle();
				localStorage.setItem('articles', JSON.stringify(response));
				console.log(response);
			} catch (error) {
				console.log(error);
			}
		};
		getTestData();
	}, []);

	return (
		<header className="sculpture-wrapper">
			<h3>Search and find</h3>
			{sculptureList.map((sculpture, index) => (
				<img key={index} src={sculpture.urls.small} alt={sculpture.alt_description} />
			))}
		</header>
	);
};

export default Sculpture;
