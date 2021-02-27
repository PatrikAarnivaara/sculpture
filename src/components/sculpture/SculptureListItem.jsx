import React, { useContext, useState } from 'react';
import { SculptureContext } from '../../context/SculptureContext';
import bookmarked from '../../assets/bookmarked.svg';
import unbookmarked from '../../assets/unbookmarked.svg';
import './Sculpture.css';
// ADD proptypes

const SculptureListItem = ({ id, url, date, description, category }) => {
	const { addSculpture, removeSculpture } = useContext(SculptureContext);
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		/* let img = document.getElementById(`${id}`); */
		if (!clicked) {
			setClicked(true);
			addSculpture(id, url, description);
			/* img.style.transform = 'scale(1.5)';
			img.style.transition = 'transform 0.25s ease'; */
		} else {
			setClicked(false);
			removeSculpture(id);
			/* img.style.transform = 'scale(1)';
			img.style.transition = 'transform 0.25s ease'; */
		}
	};

	return (
		/* Change className */
		<div className="card">
			<img src={url} alt={description} id={id} />
			<div className="overlay">
				<div>
					<div className="card-info">
						<div className="card-text">
							<p>{description}</p>
							<p>{date}</p>
							<p>{category}</p>
						</div>
						<img
							src={clicked ? bookmarked : unbookmarked}
							alt="bookmark"
							onClick={handleClick}
							style={{ width: 'auto', height: '30px' }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SculptureListItem;
