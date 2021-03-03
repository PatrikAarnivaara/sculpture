import React from 'react';
import FilterItem from './FilterItem';
import './Filter.css';

export const Filter = ({ header, items, label }) => {
	return (
		<div className="dropdown-menu">
			<input type="checkbox" id="menu" />
			<label htmlFor="menu">{header}</label>
			<div className="menu-content">
				<ul>
					{items.length ? items.map((item) => <FilterItem key={item.id} item={item} label={label} />) : []}
				</ul>
			</div>
		</div>
	);
};

export default Filter;
