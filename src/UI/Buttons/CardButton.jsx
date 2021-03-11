import React from 'react';

function CardButton({ clicked, iconClicked, iconUnClicked, handleClick }) {
	return (
		<img
			src={clicked ? iconClicked : iconUnClicked}
			alt="card button"
			onClick={handleClick}
			style={{
				width: '1.6em',
				height: 'auto',
				padding: '0',
				opacity: '25%',
			}}
		/>
	);
}

export default CardButton;
