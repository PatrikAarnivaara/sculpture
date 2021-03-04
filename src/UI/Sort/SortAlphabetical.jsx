import React from 'react';
import SortButton from './SortButton';
import sortAtoZ from '../../assets/a_z.svg';

const SortAlphabetical = ({ items, setItems }) => {
	function handleClick() {
		const sortedAlphabetically = items.sort(function (a, b) {
			const titleA = a.title.toUpperCase();
			const titleB = b.title.toUpperCase();
			if (titleA < titleB) {
				return -1;
			}
			if (titleA > titleB) {
				return 1;
			}

			return 0;
		});

		setItems(sortedAlphabetically);
	}

	return <SortButton image={sortAtoZ} description="sort a-z" handleClick={handleClick} />;
};

export default SortAlphabetical;
