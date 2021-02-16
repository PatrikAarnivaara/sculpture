import React, { useEffect, useState } from 'react';
import getSculptures from '../../api/getSculptures';
import Searchbar from '../../UI/Searchbar/Searchbar';
import SculptureList from './SculptureList';
import './Sculpture.css';

const Sculpture = () => {
	const [sculptureListArtsy, setSculptureListArtsy] = useState([]);

	useEffect(() => {
		const getListOfSculptures = async () => {
			try {
				const response = await getSculptures();
				setSculptureListArtsy(response);
				console.log(response);
			} catch (error) {
				console.log(error);
			}
		};
		getListOfSculptures();
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
