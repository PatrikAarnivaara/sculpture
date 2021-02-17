import React from 'react';
import './Searchbar.css';

const Searchbar = () => {
	return (
		<div className="container-searchbar">
			<input placeholder="search"/>
			{/* <button onClick={() => localStorage.clear()}>CLEAR</button> */}
		</div>
	);
};

export default Searchbar;
