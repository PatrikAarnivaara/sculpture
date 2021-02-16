import React, { useEffect, useState } from 'react';
import getGoogle from '../../api/getGoogle';
import Searchbar from '../../UI/Searchbar/Searchbar';
import SculptureList from './SculptureList';
import './Sculpture.css';

const Sculpture = () => {
	const [sculptureList, setSculptureList] = useState([]);

	useEffect(() => {
		const getTestData = async () => {
			try {
				const response = await getGoogle();
				setSculptureList(response);
			} catch (error) {
				console.log(error);
			}
		};
		getTestData();
	}, []);

	return (
		/* Spinner and timer */
		<div>
			<Searchbar />
			<SculptureList sculptureList={sculptureList}></SculptureList>
		</div>
	);
};

export default Sculpture;
