import React, { useContext, useState } from 'react';
import { SculptureContext } from '../../context/SculptureContext';
import bookmarked from '../../assets/bookmarked.svg';
import unbookmarked from '../../assets/unbookmarked.svg';
import './Sculpture.css';

const SculptureListItem = ({ id, url, date, description }) => {
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
		<div className="card">
			<div>
				<img src={url} alt={description} id={id} />
				<div>
					<div className="card-info">
						<div>
							<h3>{description}</h3>
							<p>{date}</p>
						</div>
						<div>
							<img
								style={{ width: '2em', height: 'auto', padding: "0" }}
								src={clicked ? bookmarked : unbookmarked}
								alt="bookmark"
								onClick={handleClick}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SculptureListItem;
