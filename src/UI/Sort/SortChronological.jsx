import React from 'react';
import SortButton from './SortButton';
import zeroNine from '../../assets/zero_nine.svg';

const SortChronological = ({ items, setItems }) => {
	function handleClick() {
		let sortChronologically = items.sort(function (a, b) {
			return a.date_start - b.date_start;
		});
		setItems(sortChronologically);
	}

	return <SortButton image={zeroNine} description="sort 0-9" handleClick={handleClick} />;
};

export default SortChronological;
