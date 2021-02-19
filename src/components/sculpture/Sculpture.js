import React, { useState,  useContext } from 'react';
import Searchbar from '../../UI/Searchbar/Searchbar';
import SculptureList from './SculptureList';
import Filter from '../../UI/Filter/Filter';
import countries from '../../data/data.json';
import { SculptureContext } from '../../context/SculptureContext';
import './Sculpture.css';

const Sculpture = () => {
	const { getListOfSculptures } = useContext(SculptureContext);
	console.log(getListOfSculptures)
	const [value, setValue] = useState(null);
	return (
		/* Spinner and timer */
		<div>
			<div className="search-filter-sort">
				<Searchbar /* getSculptures *//>
				<Filter
					prompt="Filter by subject"
					options={getListOfSculptures}
					id='id'
					label='alt_description'
					value={value}
					onChange={(val) => setValue(val)}
				/>
			</div>
			<SculptureList />
		</div>
	);
};

export default Sculpture;
