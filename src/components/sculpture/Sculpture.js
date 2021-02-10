import React, { useEffect, useState } from 'react';
import getGoogle from '../../api/getGoogle';
import './Sculpture.css';

const Sculpture = () => {
	const [sculptureList, setSculptureList] = useState('');

	useEffect(() => {
		const getTestData = async () => {
			try {
				const response = await getGoogle();
				console.log(response.data);
				setSculptureList(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		getTestData();
	}, [setSculptureList]);

	return (
		<header className="sculpture-wrapper">
			<h3>Search and find</h3>
			<h4>{sculptureList}</h4>
		</header>
	);
};

export default Sculpture;
