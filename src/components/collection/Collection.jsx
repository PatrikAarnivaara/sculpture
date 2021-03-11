import React, { useContext } from 'react';
import { SculptureContext } from '../../context/SculptureContext';
import SculptureList from '../sculpture/SculptureList';
import Modal from '../../UI/Modal/Modal';
import icon from '../../assets/unbookmarked.svg';
import trashIcon from '../../assets/trash.svg';

const Collection = () => {
	const { sculptures, removeSculpture } = useContext(SculptureContext);
	return (
		<div>
			{sculptures <= 0 ? (
				<Modal icon={icon}/>
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
