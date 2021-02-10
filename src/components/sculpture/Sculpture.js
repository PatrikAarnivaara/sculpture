import React from 'react';
import { Link } from 'react-router-dom';
import './Sculpture.css';

const Sculpture = () => {
	return (
		<header className="Sculpture-wrapper">
			<Link to="/collection">Sculpture</Link>
		</header>
	);
};

export default Sculpture;
