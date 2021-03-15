import React, { useState } from 'react';
/* import { Link } from 'react-router-dom';*/
import CardButton from '../../UI/Buttons/CardButton';
import ImageModal from '../../UI/Modal/ImageModal';
import './Sculpture.css';

const SculptureListItem = ({ item, iconUnClicked, iconClicked, image, date, addItems, removeItems }) => {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		if (!clicked) {
			setClicked(true);
			addItems(item);
		} else {
			setClicked(false);
			removeItems(item);
		}
	};

	return (
		<div className="card">
			<div>
				{/* <img
					src={`https://www.artic.edu/iiif/2/${item[image]}/full/843,/0/default.jpg`}
					alt={item.title}
					id={item.id}
				/> */}
				<ImageModal image={item[image]} alt={item.title} id={item.id} />
				{/* <Link to={`/${item.id}`}>
					<img
						src={`https://www.artic.edu/iiif/2/${item[image]}/full/843,/0/default.jpg`}
						alt={item.title}
						id={item.id}
					/>
				</Link> */}
				<div className="card-content">
					<div className="card-info">
						<h4>{item.title}</h4>
						<p>{item[date]}</p>
					</div>
					<div className="card-icon">
						<CardButton
							clicked={clicked}
							handleClick={handleClick}
							iconUnClicked={iconUnClicked}
							iconClicked={iconClicked}
						></CardButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SculptureListItem;
