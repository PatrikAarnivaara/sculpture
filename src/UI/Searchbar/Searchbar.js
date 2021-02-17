import React, { useContext, useState } from 'react';
import { SculptureContext } from '../../context/SculptureContext';
import './Searchbar.css';

const Searchbar = () => {
	const [query, setQuery] = useState('');
	const { getListOfSculptures } = useContext(SculptureContext);

	const searchSculptures = (e) => {
		e.preventDefault();
		getListOfSculptures(query);
		console.log('Submit');
	};

	console.log(query);

	return (
		<div className="container-searchbar">
			<form onSubmit={searchSculptures}>
				<input
					placeholder="search"
					type="text"
					name="query"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<input type="submit" style={{ display: 'none' }} />
			</form>
		</div>
	);
};

export default Searchbar;
