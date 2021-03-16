import React from 'react';
import './InfoBox.css';

const InfoBox = ({ icon, alt, text }) => {
	return (
		<div className="infobox-content">
			<span>{text}</span>
			<img src={icon} alt={alt} />
		</div>
	);
};

export default InfoBox;
