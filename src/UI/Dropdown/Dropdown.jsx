import React from 'react';
import './Dropdown.css';

const Dropdown = ({ list, icon }) => {
	return (
		<div className="dropdown">
			<button className="dropdown-btn">
				<img src={icon} alt="filter" />
			</button>
			<div className="dropdown-content">{list}</div>
		</div>
	);
};

export default Dropdown;
