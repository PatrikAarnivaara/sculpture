import React, { useState } from 'react';
import './Sculpture.css';

const SculptureListItem = ({ item, iconUnClicked, iconClicked, image, date, addItems, removeItems }) => {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		if (!clicked) {
			setClicked(true);
			addItems(item);
		} else {
			setClicked(false);
			removeItems(item.id);
		}
	};

	return (
		<div className="card">
			<div>
				<img
					src={`https://www.artic.edu/iiif/2/${item[image]}/full/843,/0/default.jpg`}
					alt={item.title}
					id={item.id}
				/>
				<div className="card-content">
					<div className="card-info">
						<h4>{item.title}</h4>
						<p>{item[date]}</p>
					</div>
					<div className="card-icon">
						<img
							src={clicked ? iconClicked : iconUnClicked}
							alt="bookmark"
							onClick={handleClick}
							style={{
								width: '1.6em',
								height: 'auto',
								padding: '0',
								opacity: '25%',
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SculptureListItem;
