import React, { useContext, useState } from 'react';
import { SculptureContext } from '../../context/SculptureContext';
import './Sculpture.css';

const SculptureListItem = ({ item, iconUnClicked, iconClicked, image, date }) => {
	/* TODO: Destructure: const {id, image_id, date_start, title, } = item */
	const { addSculpture, removeSculpture } = useContext(SculptureContext);
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		if (!clicked) {
			setClicked(true);
			addSculpture(item.id, item[image], item[date], item.title);
		} else {
			setClicked(false);
			removeSculpture(item.id);
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
								opacity: '20%',
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SculptureListItem;
