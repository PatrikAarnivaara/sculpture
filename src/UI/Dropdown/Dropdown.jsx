import React from 'react';
import filterIcon from '../../assets/filter_dots.svg';
import Filter from '../Filter/Filter';
import './Dropdown.css';

const Dropdown = ({ items }) => {
	return (
		<div className="dropdown">
			<button className="dropbtn">
				<img src={filterIcon} alt="filter" />
			</button>
			<div className="dropdown-content">
				<Filter items={items} />
			</div>
		</div>
	);
};

export default Dropdown;
