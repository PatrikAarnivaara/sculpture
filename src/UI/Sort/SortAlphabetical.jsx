import React from 'react';
import SortButton from './SortButton';
import sortAtoZ from '../../assets/a_z.svg';

const SortAlphabetical = () => {
	return <SortButton image={sortAtoZ} description="sort a-z" backgroundColor="red" />;
};

export default SortAlphabetical;
