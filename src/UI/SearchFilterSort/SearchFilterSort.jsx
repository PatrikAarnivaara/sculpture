import React, { useContext } from 'react';
import { SculptureContext } from '../../context/SculptureContext';
import Searchbar from '../Searchbar/Searchbar';
import Filter from '../Filter/Filter';
import Dropdown from '../../UI/Dropdown/Dropdown';
import SortAlphabetical from '../Sort/SortAlphabetical';
import SortChronological from '../Sort/SortChronological';
import filterIcon from '../../assets/filter_dots.svg';

import './SearchFilterSort.css';

const SearchFilterSort = () => {
	const { listCategories, listFilteredSculptures, setSortedList, setSortedListAZ, setTest } = useContext(
		SculptureContext
	);

	return (
		<div className="search-filter-sort">
			<Searchbar />
			<div>
				<Dropdown list={<Filter items={listCategories} />} icon={filterIcon} />
				<SortAlphabetical items={listFilteredSculptures} setItems={setSortedListAZ} test={setTest} />
				<SortChronological items={listFilteredSculptures} setItems={setSortedList} test={setTest} />
			</div>
		</div>
	);
};

export default SearchFilterSort;
