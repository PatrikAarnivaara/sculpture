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
		if (!clicked) {
			setClicked(true);
			addSculpture(id, url, description);
		} else {
			setClicked(false);
			removeSculpture(id);
		}
	};

	return (
		/* Change className */
		<div className="card">
			<div>
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
		</div>
	);
};

export default SculptureListItem;
