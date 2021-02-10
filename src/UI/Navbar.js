import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
	return (
		<nav className="Nav-wrapper">
			<Link to="/" className="Nav-sculpture-logo">
				<h2>sculpture</h2>
			</Link>
			<Link to="/collection" className="Nav-collection-logo">
				<h2>c.</h2>
			</Link>
		</nav>
	);
};

export default NavBar;
