import React, { useContext, useState } from 'react';
import { SculptureContext } from '../../context/SculptureContext';
import bookmarked from '../../assets/bookmarked.svg';
import unbookmarked from '../../assets/unbookmarked.svg';
import './Sculpture.css';

const SculptureListItem = ({ item }) => {
	/* TODO: Destructure: const {id, image_id, date_start, title, } = item */
	
	const { addSculpture, removeSculpture } = useContext(SculptureContext);
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		if (!clicked) {
			setClicked(true);
			addSculpture(item.id, item.image_id, item.date_start, item.title);
		} else {
			setClicked(false);
			removeSculpture(item.id);
		}
	};

	return (
		<div className="card">
			<div>
				<img
					src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
					alt={item.title}
					id={item.id}
				/>
				<div className="card-content">
					<div className="card-info">
						<h4>{item.title}</h4>
						<p>{item.date_start}</p>
					</div>
					<div className="card-icon">
						<img
							src={clicked ? bookmarked : unbookmarked}
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
