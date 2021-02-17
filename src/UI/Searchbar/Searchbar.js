import React, { useState } from 'react';
import './Searchbar.css';

const Searchbar = () => {
	const [query, setQuery] = useState('');
	return (
		<div className="container-searchbar">
			<input
				placeholder="search"
				type="text"
				name="query"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<form>
				<button type="submit">Search</button>
			</form>
		</div>
	);
};

export default Searchbar;
