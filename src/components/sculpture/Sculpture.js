import React, { useContext } from 'react';
import Searchbar from '../../UI/Searchbar/Searchbar';
import { SculptureContext } from '../../context/SculptureContext';
import FilterList from '../../UI/Filter/FilterList';
import './Sculpture.css';

const Sculpture = () => {
	const { sculptureListAIC } = useContext(SculptureContext);
	return (
		/* Spinner and timer */
		<div>
			<div className="search-filter-sort">
				<Searchbar />
				<FilterList items={sculptureListAIC} />
			</div>
		</div>
	);
};

export default Sculpture;
