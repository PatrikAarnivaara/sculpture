import React from 'react';
import './Animation.css';

const Animation = ({ icon }) => {
	return (
		<div className="animation">
			<img src={icon} alt="camera eye icon" />
		</div>
	);
};

export default Animation;
