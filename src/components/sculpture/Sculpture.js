import React from 'react';
import Searchbar from '../../UI/Searchbar/Searchbar';
import SculptureList from './SculptureList';
import './Sculpture.css';

const Sculpture = () => {
	return (
		/* Spinner and timer */
		<div>
			<Searchbar />
			<SculptureList></SculptureList>
		</div>
	);
};

export default Sculpture;
