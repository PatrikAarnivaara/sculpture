import React, { useState } from 'react';
import SortButton from './SortButton';
import sortAtoZ from '../../assets/a_z.svg';
import sortZtoA from '../../assets/z_a.svg';

const SortAlphabetical = ({ items, setItemsAZ, setItemsZA, test }) => {
	const [flipIcon, setFlipIcon] = useState(false);

	function handleClick() {
		if (!flipIcon) {
			setFlipIcon(true);
			const sortedAZ = items.sort(function (a, b) {
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
			setItemsAZ(sortedAZ);
			test('sortAZ');
		}
		if (flipIcon) {
			setFlipIcon(false);
			const sortedZA = items.sort(function (a, b) {
				const titleA = a.title.toUpperCase();
				const titleB = b.title.toUpperCase();
				if (titleB < titleA) {
					return -1;
				}
				if (titleB > titleA) {
					return 1;
				}

				return 0;
			});

			setItemsZA(sortedZA);
			test('sortZA');
		}
	}

	return <SortButton image={flipIcon ? sortZtoA : sortAtoZ} description="sort a-z/z-a" handleClick={handleClick} />;
};

export default SortAlphabetical;
