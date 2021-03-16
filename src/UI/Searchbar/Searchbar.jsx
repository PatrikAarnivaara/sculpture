import React, { useContext, useState } from 'react';
import { SculptureContext } from '../../context/SculptureContext';
import clearSearchbar from '../../assets/searchbar_cross.svg';
import './Searchbar.css';

const Searchbar = () => {
	const [query, setQuery] = useState('');
	const { getListOfSculptures } = useContext(SculptureContext);

	const searchSculptures = (e) => {
		e.preventDefault();
		getListOfSculptures(query);
	};

	return (
		<div className="container-searchbar">
			<form onSubmit={searchSculptures}>
				<input
					placeholder="Search"
					type="text"
					name="query"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<input type="submit" style={{ display: 'none' }} />
			</form>
			<button onClick={() => setQuery('')} className="clear">
				<img src={clearSearchbar} alt="cross" />
			</button>
		</div>
	);
};

export default Searchbar;
