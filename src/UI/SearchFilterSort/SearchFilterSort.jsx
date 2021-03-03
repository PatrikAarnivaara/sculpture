import React, { useContext } from 'react';
import { SculptureContext } from '../../context/SculptureContext';
import Searchbar from '../Searchbar/Searchbar';
/* import Filter from '../Filter/Filter'; */
import Dropdown from '../../UI/Dropdown/Dropdown'
import SortAlphabetical from '../Sort/SortAlphabetical';
import SortChronological from '../Sort/SortChronological';
import './SearchFilterSort.css';

const SearchFilterSort = () => {
	const { listCategories } = useContext(SculptureContext);

	return (
		<div className="search-filter-sort">
			<Searchbar />
			<Dropdown/>
			{/* <Dropdown header="Filter" items={listCategories} label="category_titles" /> */}
			<SortAlphabetical />
			<SortChronological />
		</div>
	);
};

export default SearchFilterSort;
