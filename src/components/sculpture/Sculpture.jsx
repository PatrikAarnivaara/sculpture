import React, { useContext } from 'react';
import Searchbar from '../../UI/Searchbar/Searchbar';
import { SculptureContext } from '../../context/SculptureContext';
import Dropdown from '../../UI/Filter/Dropdown';
import SculptureList from '../sculpture/SculptureList'
import './Sculpture.css';

const Sculpture = () => {
	const { sculptureListAIC, testList } = useContext(SculptureContext);
	console.log(testList)
	return (
		/* Spinner and timer */
		<div>
			<div className="search-filter-sort">
				<Searchbar />
				<Dropdown header="Filter by category" items={sculptureListAIC} label="category_titles" />
				<SculptureList items={testList}/>
			</div>
		</div>
	);
};

export default Sculpture;
