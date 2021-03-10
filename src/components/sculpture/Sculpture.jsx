import React, { useContext } from 'react';
import SculptureList from '../sculpture/SculptureList';
import { SculptureContext } from '../../context/SculptureContext';
import cameraEyeIcon from '../../assets/camera_eye.svg';
import bookmarked from '../../assets/bookmarked.svg';
import unBookmarked from '../../assets/unbookmarked.svg';
import './Sculpture.css';

const Sculpture = () => {
	const { listFilteredSculptures } = useContext(SculptureContext);
	return (
		/* Spinner and timer */
		<div>
			{listFilteredSculptures <= 0 ? (
				<div className="animation">
					<img className="top" src={cameraEyeIcon} alt="camera eye icon" />
				</div>
			) : (
				<div className="wrapper">
					<SculptureList
						items={listFilteredSculptures}
						iconUnClicked={unBookmarked}
						iconClicked={bookmarked}
						image="image_id"
						date="date_start"
					/>
				</div>
			)}
		</div>
	);
};

export default Sculpture;
