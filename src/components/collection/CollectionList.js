import React, { useState } from 'react';

// url: http...
const LOCAL_STORAGE_KEY = 'images';

const readFromLocalStorage = () => {
	const storedSculptures = localStorage.getItem(LOCAL_STORAGE_KEY);
	return storedSculptures ? JSON.parse(storedSculptures) : [];
};

const CollectionList = () => {
	const [sculptures, setSculptures] = useState(readFromLocalStorage());
	console.log(sculptures);

	return (
		<div>
			{sculptures ? (
				sculptures.map((sculpture, index) => (
					<img src={sculpture.id} alt="key" key={index} style={{ width: '20px', height: '20px' }} />
				))
			) : (
				<p>Nothing saved yet</p>
			)}
		</div>
	);
};

export default CollectionList;
