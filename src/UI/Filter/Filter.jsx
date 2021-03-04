import React from 'react';
import FilterItem from './FilterItem';

export const Filter = ({ items }) => {
	return <ul>{items.length ? items.map((item) => <FilterItem key={item.id} item={item} />) : []}</ul>;
};

export default Filter;
