import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
	return (
		<nav className="Nav-wrapper">
			<Link to="/" className="Nav-sculpture-logo">
				SCULPTURE
			</Link>
			<Link to="/collection" className="Nav-collection-logo">
				C
			</Link>
		</nav>
	);
};

export default NavBar;
