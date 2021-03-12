import React from 'react';
import './SearchFilterSort.css';

const SearchFilterSort = ({ layout }) => {
	return (
		<div>
			<div className="search-filter-sort">
				<div className="wrapper">{layout}</div>
			</div>
		</div>
	);
};

export default SearchFilterSort;
