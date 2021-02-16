import React, { useEffect, useState } from 'react';
import getSculptures from '../../api/getSculptures';
import Searchbar from '../../UI/Searchbar/Searchbar';
import SculptureList from './SculptureList';
import './Sculpture.css';

const Sculpture = () => {
	const [sculptureListArtsy, setSculptureListArtsy] = useState([]);

	useEffect(() => {
		const getTestData = async () => {
			try {
				const response = await getSculptures();
				setSculptureListArtsy(response);
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
			<SculptureList sculptureListArtsy={sculptureListArtsy}></SculptureList>
		</div>
	);
};

export default Sculpture;
