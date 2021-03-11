import React, { useContext } from 'react';
import { SculptureContext } from '../../context/SculptureContext';
import SculptureList from '../sculpture/SculptureList';
import Animation from '../../UI/Animation/Animation';
import icon from '../../assets/bookmark_animation.svg';
import trashIcon from '../../assets/trash.svg';

const Collection = () => {
	const { sculptures, removeSculpture } = useContext(SculptureContext);
	return (
		<div>
			{sculptures <= 0 ? (
				<Animation icon={icon} />
			) : (
				<SculptureList
					items={sculptures}
					iconUnClicked={trashIcon}
					image="image_id"
					date="date_start"
					addItems={removeSculpture}
					removeItems={null}
				/>
			)}
		</div>
	);
};

export default Collection;
