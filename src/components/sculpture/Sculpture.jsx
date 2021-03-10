import React, { useContext } from 'react';
import SculptureList from '../sculpture/SculptureList';
import { SculptureContext } from '../../context/SculptureContext';
import Animation from '../../UI/Animation/Animation';
import icon from '../../assets/camera_eye.svg';
import bookmarked from '../../assets/bookmarked.svg';
import unBookmarked from '../../assets/unbookmarked.svg';
import './Sculpture.css';

const Sculpture = () => {
	const { listFilteredSculptures, addSculpture, removeSculpture } = useContext(SculptureContext);

	return (
		/* Spinner and timer */
		<div>
			{listFilteredSculptures <= 0 ? (
				<Animation icon={icon} />
			) : (
				<div className="wrapper">
					<SculptureList
						items={listFilteredSculptures}
						iconUnClicked={unBookmarked}
						iconClicked={bookmarked}
						image="image_id"
						date="date_start"
						addItems={addSculpture}
						removeItems={removeSculpture}
					/>
				</div>
			)}
		</div>
	);
};

export default Sculpture;
