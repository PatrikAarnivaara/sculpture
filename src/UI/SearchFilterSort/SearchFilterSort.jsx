import React, { useContext } from 'react';
import { SculptureContext } from '../../context/SculptureContext';
import Searchbar from '../Searchbar/Searchbar';
import Dropdown from '../Filter/Dropdown';
import './SearchFilterSort.css';

const SearchFilterSort = () => {
	const { listCategories } = useContext(SculptureContext);

	return (
		<div className="search-filter-sort">
			<Searchbar />
			<Dropdown header="Filter" items={listCategories} label="category_titles" />
			<Dropdown header="Sort" items={listCategories} label="category_titles" />
		</div>
	);
};

export default SearchFilterSort;
