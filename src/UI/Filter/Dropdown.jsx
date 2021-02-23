import React from 'react';
import DropdownItem from './DropdownItem';
import './Dropdown.css';

export const Dropdown = ({ header, items }) => {
	return (
		<div className="dropdown-menu">
			<input type="checkbox" id="menu" />
			<label htmlFor="menu">{header}</label>
			<div className="menu-content">
				<ul>{items.length ? items.map((item) => DropdownItem(item)) : []}</ul>
			</div>
		</div>
	);
};

export default Dropdown;
