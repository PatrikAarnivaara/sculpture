import React, { useState } from 'react';
import SortButton from './SortButton';
import zeroNine from '../../assets/zero_nine.svg';
import nineZero from '../../assets/nine_zero.svg';

const SortChronological = ({ items, setItems09, setItems90, test }) => {
	const [flipIcon, setFlipIcon] = useState(false);

	function handleClick() {
		if (items.length <= 0) {
			return;
		}
		if (!flipIcon) {
			setFlipIcon(true);
			let sort09 = items.sort(function (a, b) {
				return a.date_start - b.date_start;
			});
			setItems09(sort09);
			test('sort09');
		}

		if (flipIcon) {
			setFlipIcon(false);
			let sort90 = items.sort(function (a, b) {
				return b.date_start - a.date_start;
			});
			setItems90(sort90);
			test('sort90');
		}
	}

	return <SortButton image={flipIcon ? nineZero : zeroNine} description="sort 0-9/9-0" handleClick={handleClick} />;
};

export default SortChronological;
